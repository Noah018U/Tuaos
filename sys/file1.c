// This is file1.c for the Tuaos operating system
// Created by Noah018

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to calculate the factorial of a number
int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

// Function to calculate the nth Fibonacci number
int fibonacci(int n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

// Function to calculate the sum of two numbers
int add(int a, int b) {
    return a + b;
}

// Function to calculate the difference of two numbers
int subtract(int a, int b) {
    return a - b;
}

// Function to calculate the product of two numbers
int multiply(int a, int b) {
    return a * b;
}

// Function to calculate the quotient of two numbers
int divide(int a, int b) {
    if (b == 0) {
        printf("Error: Division by zero\n");
        return 0;
    } else {
        return a / b;
    }
}

// Main function
int main() {
    int choice, num1, num2, result;
    char operation;

    printf("Welcome to the Tuaos calculator!\n");
    printf("Please select an operation:\n");
    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");
    printf("5. Factorial\n");
    printf("6. Fibonacci\n");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("Enter two numbers to add: ");
            scanf("%d %d", &num1, &num2);
            result = add(num1, num2);
            operation = '+';
            break;
        case 2:
            printf("Enter two numbers to subtract: ");
            scanf("%d %d", &num1, &num2);
            result = subtract(num1, num2);
            operation = '-';
            break;
        case 3:
            printf("Enter two numbers to multiply: ");
            scanf("%d %d", &num1, &num2);
            result = multiply(num1, num2);
            operation = '*';
            break;
        case 4:
            printf("Enter two numbers to divide: ");
            scanf("%d %d", &num1, &num2);
            result = divide(num1, num2);
            operation = '/';
            break;
        case 5:
            printf("Enter a number to calculate its factorial: ");
            scanf("%d", &num1);
            result = factorial(num1);
            operation = '!';
            break;
        case 6:
            printf("Enter a number to calculate its Fibonacci number: ");
            scanf("%d", &num1);
            result = fibonacci(num1);
            operation = 'F';
            break;
        default:
            printf("Error: Invalid choice\n");
            return 0;
    }

    printf("%d %c %d = %d\n", num1, operation, num2, result);

    return 0;
}
