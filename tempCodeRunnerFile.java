import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int grade = 0;
        boolean validInput = false;

        do {
            System.out.print("Enter the student's grade (0-100): ");
            try {
                grade = Integer.parseInt(scanner.nextLine());
                if (grade >= 0 && grade <= 100) {
                    validInput = true;
                } else {
                    System.out.println("Invalid entry. Grade must be in the range from 0 to 100.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid entry. Please enter a valid grade (0-100).");
            }
        } while (!validInput);

        System.out.println("Valid grade entered: " + grade);
        // Add your logic for processing the grade here
    }
}