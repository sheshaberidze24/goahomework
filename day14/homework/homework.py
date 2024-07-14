# pop
# 1 
num = [5, 6, 199, 40, 20, 55, 100]
num.pop(-1)
print(num)

# 2
name = ["nika", "gela", "niva" ,"luka", "vano"]
name.pop(0)
print(name)

# 3

num1 = ["nika", "gela", "niva" ,"luka", "vano"]
num1.pop(2)
print(num1)

# 4

num3 = [5, 6, 199, 40, 20, 55, 100]
num3.pop(-1)
print(num3)

# 5
# num4 = []
# num4.pop(2)
# print(num4) 


#  count
#1
num5 = [5, 6, 7, 9, 10]
print(num5.count(5))

# 2
world = "flower is beutiful"
print(world.count("o"))

# 3
cum = [True, False]
print(cum.count(True))

# 4
cum1 = [3, 4, 3, 4, 6, 7]
print(cum1.count(3))

# max

# 1
numbers = [5, 6, 10, 12, 50]
print(max(numbers))

#2

words = ["lela", "kaxa", "alahakbar"]
num = 0
for i in words:
    if len(i) > num:
        num = len(i)
        result = i
print(result)

# 3
numbers = [5, 6, 10, 12, 50]
print(max(numbers))

# 4
numbers = [1923, 456, 1999, 2020, 2024]
print(max(numbers))
    

# min


# 1
numbers = [5, 6, 10, 12, 50]
print(min(numbers))

#2

words = ["lela", "kaxa", "alahakbar"]
num = len(words[0])
result = words[0]
for i in words:
    if len(i) < num:
        num = len(i)
        result = i
print(result)


# 3
numbers = [5, 6, 10, 12, 50]
print(min(numbers))

# 4
numbers = [50, 15, 12, 2, 6]
print(min(numbers))

# sum

# 1

list1 = [5, 6, 7, 9, 10, 12]

print(sum(list1))

# 2
list2 = ["nika", "gio", "gela", "nodo", "givi"]

string = ""
for i in list2:
    string = string + i
print(len(string))

# 3
results = [5, 78, 43, 12, 23, 44]

print(sum(results))

# 4
list4 = [5, 6, 7, 12, 13, 15]

print(sum(list4))

# len
# 1

list5 = ["givi", "lela", "wupaka", "sandro", "beqa"]

for i in list5:
    print(len(i))

# 2

days = ["monday", "tuesday", "wednesday", "thuesday", "friday", "saturday", "sunday"]

print(len(days))

# 3
num = [5, 6, 7, [5, 8, 9]]

print(len(num[3]))



    




