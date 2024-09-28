# codewars

# 1
def high_and_low(numbers):
    numbers = numbers.split(' ')
    numbers = sorted(numbers, key=int)
    return numbers[-1] + ' ' + numbers[0]

# 2
def mean(lst):
    mean = []
    string = ""
    digits = "0123456789"
    for i in lst:
        if i in digits:
            mean.append(int(i))
        else:
            string += i
    return [sum(mean) / len(mean), string]

# 3 
def square_digits(num):
    result = ""
    for i in str(num):
        result += str(int(i) ** 2)
    return int(result)

# 4
def sum_of_n(n):
    if n < 0:
        return sorted([sum(x for x in range(i,1)) for i in range(n, 1)], reverse=True)
    else:
        return [sum([x for x in range(i+1)]) for i in range(n+1)]
    
# 5

def disemvowel(string):
    _string = ''
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for s in string:
        if s in vowels:
            continue
        _string += s
    string = _string
    return string
# 6

def get_sum(a,b):
    return sum(list(range(a, b+1))) if a < b else sum(list(range(b, a+1)))
# 7

def nb_year(p0, percent, aug, p, count = 0):
    if (p0 >= p):
        return count
    else:
        count += 1
        pop = p0 + p0 * (percent/100) + aug # ბოლომდე კარგად ვერ გავიგე
        return nb_year(pop, percent, aug, p, count) # არარის დასრულებული

# 8
# 9
# 10