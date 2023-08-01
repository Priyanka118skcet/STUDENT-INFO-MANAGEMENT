package Store.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import Store.model.CartEntry;
import Store.MedicalStore;

public class AdminUser extends User {
	 MedicalStore store = new MedicalStore();
    public AdminUser(String username, String password) {
        super(username, password);
    }

    @Override
    public boolean isAdmin() {
        return true;
    }
    
    

    @Override
    public void viewMedicines() {
    	try (Connection conn = store.getConnection();
	             Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM medicines")) {
	            System.out.println("Medicine List:");
	            while (rs.next()) {
	                int id = rs.getInt("id");
	                String name = rs.getString("name");
	                double price = rs.getDouble("price");
	                int quantity = rs.getInt("quantity");
	                System.out.println("ID: " + id + ", Name: " + name + ", Price: $" + price + ", Quantity: " + quantity);
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
    }

    @Override
    public void addToCart(String medicineName, int quantity) {
    	try (Connection conn = store.getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM medicines WHERE name=?")) {
	            stmt.setString(1, medicineName);
	            try (ResultSet rs = stmt.executeQuery()) {
	                if (rs.next()) {
	                    int medicineId = rs.getInt("id");
	                    double price = rs.getDouble("price");

	                    CartEntry cartEntry = new CartEntry(medicineId, medicineName, price, quantity);
	                    store.userCarts.computeIfAbsent(username, k -> new ArrayList<>()).add(cartEntry);
	                    System.out.println("Medicine added to cart.");
	                } else {
	                    System.out.println("Medicine not found. Please check the medicine name.");
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
    }

    @Override
    public void viewCart() {
    	 List<CartEntry> cart = store.userCarts.get(username);
	        if (cart == null || cart.isEmpty()) {
	            System.out.println("Your cart is empty.");
	        } else {
	            System.out.println("Cart for User '" + username + "':");
	            double totalAmount = 0;
	            for (CartEntry entry : cart) {
	                System.out.println("ID: " + entry.getMedicineId() + ", Name: " + entry.getMedicineName() +
	                        ", Price: $" + entry.getPrice() + ", Quantity: " + entry.getQuantity());
	                totalAmount += entry.getPrice() * entry.getQuantity();
	            }
	            System.out.println("Total Amount: $" + totalAmount);
	        }
    }

    @Override
    public double checkout() {
    	List<CartEntry> cart = store.userCarts.get(username);
        if (cart == null || cart.isEmpty()) {
            System.out.println("Your cart is empty. Cannot proceed with checkout.");
            return 0;
        }

        double totalBill = 0;
        for (CartEntry entry : cart) {
            totalBill += entry.getPrice() * entry.getQuantity();
        }

        // Clear the cart after checkout
        store.userCarts.remove(username);

        // Perform any additional actions related to checkout, such as updating quantities in the database, etc.

        return totalBill;
    }
}



