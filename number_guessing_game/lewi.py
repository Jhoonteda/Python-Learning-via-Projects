# calculator.py

def calculator():
    print("Welcome to the Calculator!")
    print("Please enter two numbers:")
    
    num1 = float(input("Number 1: "))
    num2 = float(input("Number 2: "))
    
    print("\nSelect an operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    
    choice = int(input("Enter your choice (1-4): "))
    
    if choice == 1:
        result = num1 + num2
        operation = "+"
    elif choice == 2:
        result = num1 - num2
        operation = "-"
    elif choice == 3:
        result = num1 * num2
        operation = "*"
    elif choice == 4:
        if num2 != 0:
            result = num1 / num2
            operation = "/"
        else:
            print("Error: Division by zero is not allowed.")
            return
    else:
        print("Invalid choice.")
        return
    
    print(f"\nResult: {num1} {operation} {num2} = {result}")


calculator()