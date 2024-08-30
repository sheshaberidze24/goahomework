# codewars

# 1

def positive_sum(arr):
    total = 0
    for i in arr:
        if i > 0:
            total += i
    return total

# 2

def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    if boolean == False:
        return "No"


# 3

def remove_char(s):
    return s[1: -1]


# 4

def repeat_str(repeat, string):
    return string * repeat


# 5

def find(array, i):
    return array.index(i) if i in array else "Not found"



