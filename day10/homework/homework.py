
# 1
num = 0

for i in range(0, 100):
    num = num + i 
print(num)



num = 0

for i in range(0, 100):
    num = num - i 
print(num)

num = 1

for i in range(1, 100):
    num = num * i 
print(num)


num = 1

for i in range(1, 100):
    num = num / i 
print(num)



num = 1

for i in range(1, 100):
    num = num % i 
print(num)

num = 1

for i in range(1, 100):
    num = num // i 
print(num)


# 2
num = int(input(" Please enter a number: "))

sum = 0

for i in range(1, num):
    sum = sum + i
print(sum)

# 3
num1 = int(input(" Please enter the first number: "))
num2 = int(input(" Please enter the second number: "))

sum1 = 0
result = 1

for i in range(num1 + 1, num2):
    sum1 = sum1 + i
    result = result * i
print(sum1, result)

