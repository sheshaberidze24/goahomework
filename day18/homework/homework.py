# 1
person = {
     "name": "nika",
     "age": 16,
     "city": "aspindza",
     "work": "programer"
}

print(type(person))
print("------------------------------------------------")
print()
print("----------------------------------")
print(f"my name is {person["name"]}, i am {person["age"]} years old and styding goal oriented academy, And I'm going to become a full stack developer")

# 2

person = {
    "math": 5,
    "english": 16,
    "georgian": 10,
    "spanish": 2,
}

sum = 0
for i in person.values():
    sum += i

print("cemi qulebis sashualoa:", sum / len(person))
    
# 3

books = {
    "1": "harry poter",
    "2": "monster",
    "3": "pirates of carribean"
}

print(f"cemi sayvareli wignia: {books['2']}")
    

# 4
nivtis_saxeli = input("risi shedzena gsurt?: ")
raodenoba = input("ramdeni cali?: ")

cart = {}


cart[nivtis_saxeli] = raodenoba + "x"
print(cart)