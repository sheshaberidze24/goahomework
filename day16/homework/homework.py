# 1
num1 = [5, 6, 7, 3, 1, 9, 2]
min = num1[0]
for i in num1:
    if min > i:
        min = i
print(min)

# 2
num2 = [5, 6, 7, 3, 1, 9, 2]
max = num2[0]
for i in num2:
    if max < i:
        max = i
print(max)
# 3
numbers = [5, 6, 8, 9, 2, 12]
print(numbers[:5:2])

# 4

num = [1, 4, 6, 7, 9]
names = ["nika", "gio", "nugo", "beqa", "lela"]

result = []
index = 0
for i in num:
    result.append(i)
    result.append(names[index])
    index = index + 1
print(result)

# 5
list1 = ["gio", 5, "nika", 6, "luka", "saba", 12, "gela"]

strings = []
integers = []

for i in list1:
    if type(i) == str:
        strings.append(i)
    else:
        integers.append(i)
print(strings)
print(integers)

# 6
list5 = [2, 3, 4, 5, 6]
list6 = [12, 14, 16, 18]
list7 = [22, 44, 66, 88, 10]
list8 = [18, 46, 24, 46, 28]

odd = []
even = []

main_list = list5 + list6 + list7 + list8

for i in main_list:
    if i % 2 == 0:
        odd.append(i)
    else:
        even.append(i)
print(sum(odd))
print(sum(even))


# 7
list9 = [2, 3, 4, 5, 6]
list10 = [12, 14, 16, 18]
list11 = [22, 44, 66, 83, 10]
list12 = [18, 46, 24, 47, 28]

odd = []
even = []

main_list = list9 + list10 + list11 + list12

for i in main_list:
    if i % 2 == 0:
        odd.append(i)
    else:
        even.append(i)
print(odd)
print(even)

# 8
toys = ["nika", "gio", "shawarma", "nino", "genadi"]

toys2 = []
for i in toys:
    toys2.append(len(i))
print(toys2)

# 9
folder = ["joni", 5, "Nigga", 99, "nea"]
folder1 = ["slave", 9, "sopa", 52, "nika"]
folder2 = ["lela", 5, "dima", 22, "nini"]


strings = ""
integers = []

folders = folder + folder1 + folder2

for i in folders:
    if type(i) == str:
        strings += i
    else:
        integers.append(i)
print(strings)
print(sum(integers))


# 10

numbers10 = [5, 6, 7, 9, 12, 45, 66]

evens = []
index = 0

for i in numbers10:
    if index % 2 == 0:
        evens.append(i)
    index += 1
print(evens)
    
    

