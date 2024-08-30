# codewars

# 1

def find_smallest_int(numbers):
    # Code here
    min_num = numbers[0]
    #min number variable
    for num in numbers:
    #for loop
        if num < min_num:
            #with this code we will check if min_num is more than num
            min_num = num
            #min_num will become equale to num
    return min_num

# 2

def to_alternating_case(string):
    result =  ""
    for char in string:
        if char.islower():
            result = result + char.upper()
        else:
            result = result + char.lower()
    return result