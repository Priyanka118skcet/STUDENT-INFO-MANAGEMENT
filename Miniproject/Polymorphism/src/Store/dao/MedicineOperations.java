package Store.dao;

public interface MedicineOperations {
    void searchMedicine(String medicineName);
    void viewMedicines();
    void addToCart(String username, String medicineName, int quantity);
    void viewCart(String username);
    double checkout(String username);
}
