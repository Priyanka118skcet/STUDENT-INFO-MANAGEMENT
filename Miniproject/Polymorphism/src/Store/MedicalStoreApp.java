package Store;

import java.util.Scanner;

public class MedicalStoreApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        MedicalStore store = new MedicalStore();

        while (true) {
            System.out.println("1. Register as User\n2. Register as Admin\n3. Login\n4. Exit");
            System.out.print("Enter the Choice: ");
            int choice = getValidInput(scanner, 1, 4);

            switch (choice) {

                case 1:
                    System.out.println("Register as User:");
                    System.out.print("Enter username: ");
                    String userUsername = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String userPassword = scanner.nextLine();
                    store.registerUser(userUsername, userPassword, false);
                    break;
                case 2:
                    System.out.println("Register as Admin:");
                    System.out.print("Enter username: ");
                    String adminUsername = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String adminPassword = scanner.nextLine();
                    store.registerUser(adminUsername, adminPassword, true);
                    break;
                case 3:
                    System.out.println("Login:");
                    System.out.print("Enter username: ");
                    String username = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String password = scanner.nextLine();
                    if (store.loginUser(username, password)) {
                        if (store.isUserAdmin(username)) {
                            adminMenu(store);
                        } else {
                            userMenu(store, username);
                        }
                    } else {
                        System.out.println("Invalid username or password.");
                    }
                    break;
                case 4:
                    System.out.println("Exiting the application.");
                    scanner.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    private static void userMenu(MedicalStore store, String username) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\nUser Menu:");
            System.out.println("1. Search medicine\n2. Add to cart\n3. View cart\n4. Checkout\n5. Logout");
            System.out.print("Enter the Choice: ");
            int choice = getValidInput(scanner, 1, 6);

            switch (choice) {
                case 1:
                    System.out.print("Enter medicine name: ");
                    String medicineName = scanner.nextLine();
                    store.searchMedicine(medicineName);
                    break;
                case 2:
                    System.out.println("Add to cart:");
                    System.out.print("Enter medicine name to add to cart: ");
                    String medicineName1 = scanner.nextLine();
                    System.out.print("Enter quantity: ");
                    int quantity = getValidInput(scanner, 1, Integer.MAX_VALUE);
                    store.addToCart(username, medicineName1, quantity);
                    break;
                case 3:
                    store.viewCart(username);
                    break;
                case 4:
                    double totalBill = store.checkout(username);
                    System.out.println("Total bill amount: $" + totalBill);
                    break;
                case 5:
                    System.out.println("Logging out.");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    private static void adminMenu(MedicalStore store) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\nAdmin Menu:");
            System.out.println("1. View users\n2. View medicines\n3. Add medicine\n4. Update medicine\n5. Delete medicine\n6. Add stock\n7. Update stock\n8. View stock\n9. Logout");
            System.out.print("Enter the Choice: ");
            int choice = getValidInput(scanner, 1, 9);

            switch (choice) {
                case 1:
                    store.viewUsers();
                    break;
                case 2:
                    store.viewMedicines();
                    break;
                case 3:
                    System.out.println("Enter medicine details to add:");
                    System.out.print("Name: ");
                    String medName = scanner.nextLine();
                    System.out.print("Price: ");
                    double price = scanner.nextDouble();
                    System.out.print("Quantity: ");
                    int quantity = scanner.nextInt();
                    store.addMedicine(medName, price, quantity);
                    break;
                case 4:
                    System.out.print("Enter medicine ID to update: ");
                    int updateMedId = getValidInput(scanner, 1, Integer.MAX_VALUE);
                    scanner.nextLine(); // Consume the newline character
                    System.out.println("Enter new details for the medicine:");
                    System.out.print("Name: ");
                    String newName = scanner.nextLine();
                    System.out.print("Price: ");
                    double newPrice = scanner.nextDouble();
                    System.out.print("Quantity: ");
                    int newQuantity = scanner.nextInt();
                    store.updateMedicine(updateMedId, newName, newPrice, newQuantity);
                    break;
                case 5:
                    System.out.print("Enter medicine ID to delete: ");
                    int deleteMedId = getValidInput(scanner, 1, Integer.MAX_VALUE);
                    store.deleteMedicine(deleteMedId);
                    break;
                case 6:
                    System.out.println("Add stock:");
                    System.out.print("Enter medicine name: ");
                    String medicineNameAddStock = scanner.nextLine();
                    System.out.print("Enter quantity: ");
                    int quantityAddStock = getValidInput(scanner, 1, Integer.MAX_VALUE);
                    int medicineId = store.getMedicineIdByName(medicineNameAddStock);
                    if (medicineId > 0) {
                        store.addStock(medicineId, quantityAddStock);
                    } else {
                        System.out.println("Invalid medicine name. Please check the medicine name.");
                    }
                    break;
                case 7:
                    System.out.println("Update stock:");
                    System.out.print("Enter medicine name: ");
                    String medicineNameUpdateStock = scanner.nextLine();
                    System.out.print("Enter new quantity: ");
                    int newQuantityUpdateStock = getValidInput(scanner, 1, Integer.MAX_VALUE);
                    int medicineIdUpdateStock = store.getMedicineIdByName(medicineNameUpdateStock);
                    if (medicineIdUpdateStock > 0) {
                        store.updateStock(medicineIdUpdateStock, newQuantityUpdateStock);
                    } else {
                        System.out.println("Invalid medicine name. Please check the medicine name.");
                    }
                    break;
                case 8:
                    store.viewStock();
                    break;
                case 9:
                    System.out.println("Logging out.");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    private static int getValidInput(Scanner scanner, int min, int max) {
        int input;
        while (true) {
            try {
                String line = scanner.nextLine();
                if (line.trim().isEmpty()) {
                    continue;
                }
                input = Integer.parseInt(line);
                if (input >= min && input <= max) {
                    break;
                } else {
                    System.out.println("Invalid input. Please enter a number between " + min + " and " + max + ".");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a number.");
            }
        }
        return input;
    }
}
