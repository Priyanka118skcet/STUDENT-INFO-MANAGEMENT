package Store.model;

public abstract class User {
    protected String username;
    protected String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    // Define abstract methods to be implemented by subclasses
    public abstract boolean isAdmin();
    public abstract void viewMedicines();
    public abstract void addToCart(String medicineName, int quantity);
    public abstract void viewCart();
    public abstract double checkout();
}
