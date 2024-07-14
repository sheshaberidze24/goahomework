
# 1
num = int(input("enter numbers in range 1-7: "))
if num == 1:
    print("monday")
elif num == 2:
    print("tuesday")
elif num == 3:
    print("wednesday")
elif num == 4:
    print("tursday")
elif num == 5:
    print("friday")
elif num == 6:
    print("saturday")
else:
    print("sunday")

# 2
num = 0

while num != 10 + 1:
    if num % 2 == 0:
        print(num, "is even")
    else:
        print(num," is odd")
    num = num + 1

#3
age = int(input("Please enter your age: "))

if age > 5 and age < 12:
    print("You are kid")
elif age > 12 and age < 18:
    print("You are teenager")
elif age > 18:
    print("You are adult")


#4
num1 = int(input("Please enter your budget: "))
num2 = int(input("Please enter book price: "))

if num1 >= num2:
    print("You can by a book")
else:
    print("You can't by a book")


