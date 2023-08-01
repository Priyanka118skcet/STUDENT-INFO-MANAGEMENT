package Store;

import Store.dao.MedicineOperations;
import Store.model.User;
import Store.model.RegularUser;
import Store.model.AdminUser;
import Store.model.CartEntry;

import java.sql.*;
import java.util.*;

//The class "MedicalStore" is declared, which implements the "MedicineOperations" interface.
//The interface likely contains additional methods related to medicine operations.

public class MedicalStore implements MedicineOperations {
	 private static final String DB_URL = "jdbc:mysql://localhost:3306/poly";
	    private static final String DB_USER = "root";
	    private static final String DB_PASSWORD = "skcet@123";
	    //It uses the MySQL JDBC driver by loading it using "Class.forName" in a static block.
	    static {
	        try {
	            Class.forName("com.mysql.cj.jdbc.Driver");
	        } catch (ClassNotFoundException e) {
	            e.printStackTrace();
	        }
	    }
	 
	    public Connection getConnection() throws SQLException {
	        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	    }
	    
      //The class maintains a "userCarts" variable, which is a HashMap that stores the cart items for each user
	    
	    public Map<String, List<CartEntry>> userCarts = new HashMap<>();

	    //It takes a username, password, and a boolean flag "isAdmin" indicating whether the user is an admin or a regular user.
	    //The method checks if the user with the provided username or password already exists in the database using SQL queries.
	    //If the user doesn't exist, it inserts a new user record into the database.
	    public void registerUser(String username, String password, boolean isAdmin) {
	        try (Connection conn = getConnection()) {
	            String checkQuery;
	            if (isAdmin) {
	                checkQuery = "SELECT id FROM users WHERE username=?";
	            } else {
	                checkQuery = "SELECT id FROM users WHERE username=? OR password=?";
	            }

	            try (PreparedStatement checkStmt = conn.prepareStatement(checkQuery)) {
	                checkStmt.setString(1, username);
	                if (!isAdmin) {
	                    checkStmt.setString(2, password);
	                }

	                try (ResultSet rs = checkStmt.executeQuery()) {
	                    if (rs.next()) {
	                        if (isAdmin) {
	                            System.out.println("Registration Failed. Admin already exists with the provided username.");
	                        } else {
	                            System.out.println("Registration Failed. User already exists with the provided username or password.");
	                        }
	                        return;
	                    }
	                }
	            }

	            // If no existing user with the same username or password is found, proceed with the registration.
	            try (PreparedStatement insertStmt = conn.prepareStatement(
	                    "INSERT INTO users (username, password, isAdmin) VALUES (?, ?, ?)")) {
	                insertStmt.setString(1, username);
	                insertStmt.setString(2, password);
	                insertStmt.setBoolean(3, isAdmin);
	                insertStmt.executeUpdate();
	                System.out.println("Registration successful.");
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }



	    public boolean loginUser(String username, String password) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username=? AND password=?")) {
	            stmt.setString(1, username);
	            stmt.setString(2, password);
	            try (ResultSet rs = stmt.executeQuery()) {
	                if (rs.next()) {
	                    System.out.println("Login successful. Welcome, " + username + "!");
	                    return true;
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	        System.out.println("Invalid username or password.");
	        return false;
	    }

	    public boolean isUserAdmin(String username) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT isAdmin FROM users WHERE username=?")) {
	            stmt.setString(1, username);
	            try (ResultSet rs = stmt.executeQuery()) {
	                if (rs.next()) {
	                    return rs.getBoolean("isAdmin");
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	        return false;
	    }

	    public void searchMedicine(String medicineName) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM medicines WHERE name LIKE ?")) {
	            stmt.setString(1, "%" + medicineName + "%");
	            try (ResultSet rs = stmt.executeQuery()) {
	                boolean medicineFound = false; // Flag to check if medicine is available
	                System.out.println("Search Results for '" + medicineName + "':");
	                while (rs.next()) {
	                    int id = rs.getInt("id");
	                    String name = rs.getString("name");
	                    double price = rs.getDouble("price");
	                    int quantity = rs.getInt("quantity");
	                    System.out.println("ID: " + id + ", Name: " + name + ", Price: $" + price + ", Quantity: " + quantity);
	                    medicineFound = true; // Set the flag to true if at least one medicine is found
	                }

	                if (!medicineFound) {
	                    System.out.println("Medicine not availabe.");
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }
	    
	    public int getMedicineIdByName(String medicineName) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT id FROM medicines WHERE name = ?")) {
	            stmt.setString(1, medicineName);
	            try (ResultSet rs = stmt.executeQuery()) {
	                if (rs.next()) {
	                    return rs.getInt("id");
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	        return 0;
	    }
	    
	    public void addStock(int medicineId, int quantity) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("INSERT INTO stock (medicine_id, available_quantity) VALUES (?, ?)")) {
	            stmt.setInt(1, medicineId);
	            stmt.setInt(2, quantity);
	            int rowsAffected = stmt.executeUpdate();
	            if (rowsAffected > 0) {
	                System.out.println("Stock added successfully.");
	            } else {
	                System.out.println("Failed to add stock.");
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    
	    public void updateStock(int medicineId, int newQuantity) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("UPDATE stock SET available_quantity=? WHERE medicine_id=?")) {
	            stmt.setInt(1, newQuantity);
	            stmt.setInt(2, medicineId);
	            int rowsAffected = stmt.executeUpdate();
	            if (rowsAffected > 0) {
	                System.out.println("Stock updated successfully.");
	            } else {
	                System.out.println("Failed to update stock. Please check the medicine ID.");
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }


	    public void viewStock() {
	        try (Connection conn = getConnection();
	             Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM stock")) {
	            System.out.println("Stock List:");
	            while (rs.next()) {
	                int stockId = rs.getInt("id");
	                int medicineId = rs.getInt("medicine_id");
	                int availableQuantity = rs.getInt("available_quantity");
	                System.out.println("Stock ID: " + stockId + ", Medicine ID: " + medicineId + ", Available Quantity: " + availableQuantity);
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }
	    public int getAvailableStock(int medicineId) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT available_quantity FROM stock WHERE medicine_id=?")) {
	            stmt.setInt(1, medicineId);
	            try (ResultSet rs = stmt.executeQuery()) {
	                if (rs.next()) {
	                    return rs.getInt("available_quantity");
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	        return 0;
	    }
	    public void viewUserMedicines(String username) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT m.id, m.name, m.price, m.quantity FROM medicines m " +
	                     "JOIN user_medicines um ON m.id = um.medicine_id " +
	                     "JOIN users u ON um.user_id = u.id WHERE u.username = ?")) {
	            stmt.setString(1, username);
	            try (ResultSet rs = stmt.executeQuery()) {
	                System.out.println("Medicine List for User '" + username + "':");
	                while (rs.next()) {
	                    int id = rs.getInt("id");
	                    String name = rs.getString("name");
	                    double price = rs.getDouble("price");
	                    int quantity = rs.getInt("quantity");
	                    System.out.println("ID: " + id + ", Name: " + name + ", Price: $" + price + ", Quantity: " + quantity);
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public void viewMedicines() {
	        try (Connection conn = getConnection();
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
	    public void addToCart(String username, String medicineName, int quantity) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM medicines WHERE name=?")) {
	            stmt.setString(1, medicineName);
	            try (ResultSet rs = stmt.executeQuery()) {
	                if (rs.next()) {
	                    int medicineId = rs.getInt("id");
	                    double price = rs.getDouble("price");

	                    CartEntry cartEntry = new CartEntry(medicineId, medicineName, price, quantity);
	                    userCarts.computeIfAbsent(username, k -> new ArrayList<>()).add(cartEntry);
	                    System.out.println("Medicine added to cart.");
	                } else {
	                    System.out.println("Medicine not found. Please check the medicine name.");
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public void viewUsers() {
	        try (Connection conn = getConnection();
	             Statement stmt = conn.createStatement();
	             ResultSet rs = stmt.executeQuery("SELECT * FROM users")) {
	            System.out.println("User List:");
	            while (rs.next()) {
	                int id = rs.getInt("id");
	                String username = rs.getString("username");
	                boolean isAdmin = rs.getBoolean("isAdmin");
	                System.out.println("ID: " + id + ", Username: " + username + ", Admin: " + isAdmin);
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	   


	    

	    public void addMedicine(String name, double price, int quantity) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("INSERT INTO medicines (name, price, quantity) VALUES (?, ?, ?)")) {
	            stmt.setString(1, name);
	            stmt.setDouble(2, price);
	            stmt.setInt(3, quantity);
	            int rowsAffected = stmt.executeUpdate();
	            if (rowsAffected > 0) {
	                System.out.println("Medicine added successfully.");
	            } else {
	                System.out.println("Failed to add medicine.");
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public void updateMedicine(int medicineId, String newName, double newPrice, int newQuantity) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("UPDATE medicines SET name=?, price=?, quantity=? WHERE id=?")) {
	            stmt.setString(1, newName);
	            stmt.setDouble(2, newPrice);
	            stmt.setInt(3, newQuantity);
	            stmt.setInt(4, medicineId);
	            int rowsAffected = stmt.executeUpdate();
	            if (rowsAffected > 0) {
	                System.out.println("Medicine updated successfully.");
	            } else {
	                System.out.println("Failed to update medicine. Please check the medicine ID.");
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }

	    public void deleteMedicine(int medicineId) {
	        try (Connection conn = getConnection();
	             PreparedStatement stmt = conn.prepareStatement("DELETE FROM medicines WHERE id=?")) {
	            stmt.setInt(1, medicineId);
	            int rowsAffected = stmt.executeUpdate();
	            if (rowsAffected > 0) {
	                System.out.println("Medicine deleted successfully.");
	            } else {
	                System.out.println("Failed to delete medicine. Please check the medicine ID.");
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }
	    public void viewCart(String username) {
	        List<CartEntry> cart = userCarts.get(username);
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

	    public double checkout(String username) {
	        List<CartEntry> cart = userCarts.get(username);
	        if (cart == null || cart.isEmpty()) {
	            System.out.println("Your cart is empty. Cannot proceed with checkout.");
	            return 0;
	        }

	        double totalBill = 0;
	        for (CartEntry entry : cart) {
	            totalBill += entry.getPrice() * entry.getQuantity();
	        }

	        // Clear the cart after checkout
	        userCarts.remove(username);

	        // Perform any additional actions related to checkout, such as updating quantities in the database, etc.

	        return totalBill;
	    }

}
