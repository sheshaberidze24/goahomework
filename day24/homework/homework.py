def manual_count(string, count_char):
    count = 0
    for i in string:
        if i == count_char:
            count += 1
    return count
print(manual_count("loomssiaa", "o"))


# isupper
# 1
names = "JAJANIDDZE"
print(names.isupper())
# 2
names = "JAJANIDze"
print(names.isupper())

# 3
names = "loma"
print(names.isupper())

# 4
names = "gOa"
print(names.isupper())

# 5
names = "sheshaberidZe"
print(names.isupper())


# islower
# 1
names = "nika"
print(names.islower())
# 2
names = "GIO"
print(names.islower())
# 3
names = "JaBA"
print(names.islower())
# 4
names = "saba"
print(names.islower())
# 5
names = "kopPa"
print(names.islower())

# isnumeric
# 1
names = "45to"
print(names.isnumeric())
# 2
names = "328848393"
print(names.isnumeric())
# 3
names = "JAJa40003"
print(names.isnumeric())
# 4
names = "10po2"
print(names.isnumeric())
# 5
names = "2niko"
print(names.isnumeric())

# isalpha

# 1

num = "3a/8)"
print(num.isalpha())
# 2

num = "300csrQ)"
print(num.isalpha())
# 3

num = "aloo"
print(num.isalpha())
# 4

num = "354abc"
print(num.isalpha())
# 5

num = "vvbkdd"
print(num.isalpha())


