def bonus_time(salary: int, bonus: bool) -> str:
    total = salary * 10 if bonus else salary
    return f"${total}"

print(bonus_time(1000, True)) 
print(bonus_time(2500, False)) 


# codewars
def bonus_time(salary: int, bonus: bool) -> str:
    total = salary * 10 if bonus else salary
    return f"${total}"

def number_lines(lines: list) -> list:
    return [f"{i + 1}: {line}" for i, line in enumerate(lines)]

print(bonus_time(1000, True))
print(bonus_time(2500, False))
print(number_lines(["a", "b", "c"]))  
