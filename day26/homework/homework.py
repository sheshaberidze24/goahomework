
list = [1, 2, 3, 4]


result = []

for i in list:
    if i % 2 == 0:
        result.append(int(i / 2))
    else:
        result.append(i * 2)
print(result)

# codewars

# 1

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
# 2 

def number_to_string(num):
    return str(num)


# 3

def solution(string):
    return string[::-1]

# 4

def opposite(number):
    return -number

# 5

def make_negative( number ):
    if number > 0:
        return -number
    else:
        return number