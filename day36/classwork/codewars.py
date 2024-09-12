# codewars

# 1
def solve(s):
    count_l = 0
    count_u = 0
    
    for char in s:
        if char.islower():
            count_l += 1
        else:
            count_u += 1
    
    if count_l >= count_u:
        return s.lower()
    else:
        return s.upper()
# 2
def remove_smallest(numbers):
    if len(numbers) == 0:
        return []
    
    min_number = min(numbers)
    copy_numbers = numbers.copy()
    copy_numbers.remove(min_number)
    return copy_numbers

# 3

def capitalize(s):
    even_caps = ""
    odd_caps = ""
    
    for i in range(len(s)):
        if i % 2 == 0:
            even_caps += s[i].upper()
            odd_caps += s[i]
        else:
            even_caps += s[i]
            odd_caps += s[i].upper()
    
    return [even_caps,odd_caps]

# 4


def in_asc_order(arr):
    return arr==sorted(arr)

# 5

def remove_duplicate_words(s):
    words = s.split(" ")
    result = []
    
    for word in words:
        if word not in result:
            result.append(word)
    
    return " ".join(result)

# 6

def repeats(arr):
    sum = 0
    
    for num in arr:
        if arr.count(num) == 1:
            sum += num
    
    return sum