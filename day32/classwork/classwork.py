# codewars

# 1

def find_short(s):
    list = s.split()
    length = float("inf")
    for word in list:
        if(len(word) < length):
            length = len(word)
    return length

# 2

def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

# Training on Find The Parity Outlier
# Training on Duplicate Encoder
