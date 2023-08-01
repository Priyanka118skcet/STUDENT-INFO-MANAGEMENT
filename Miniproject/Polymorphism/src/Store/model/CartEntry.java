package Store.model;

public class CartEntry {
    private int medicineId;
    private String medicineName;
    private double price;
    private int quantity;

    public CartEntry(int medicineId, String medicineName, double price, int quantity) {
        this.medicineId = medicineId;
        this.medicineName = medicineName;
        this.price = price;
        this.quantity = quantity;
    }

    public int getMedicineId() {
        return medicineId;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }
}
