class Car:
    def __init__(self, name, year, engine, horsepower, color, owner):
        self.name = name
        self.year = year
        self.engine = engine
        self.horsepower = horsepower
        self.color = color
        self.owner = owner

    def __str__(self):
        return (f"Car: {self.name}, Year: {self.year}, Engine: {self.engine}, "
                f"Horsepower: {self.horsepower}, Color: {self.color}, Owner: {self.owner}")

class Animal:
    def __init__(self, species, name, age):
        self.species = species
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} ({self.species}), Age: {self.age}"

class Student:
    def __init__(self, name, grade, school):
        self.name = name
        self.grade = grade
        self.school = school

    def __str__(self):
        return f"{self.name}, Grade: {self.grade}, School: {self.school}"

class Person:
    def __init__(self, name, age, height, person_id):
        self.name = name
        self.age = age
        self.height = height
        self.person_id = person_id

    def __str__(self):
        return f"Person: {self.name}, Age: {self.age}, Height: {self.height}, ID: {self.person_id}"

# Creating three Person objects
person1 = Person("John Doe", 30, 180, "ID001")
person2 = Person("Jane Smith", 25, 165, "ID002")
person3 = Person("Alice Johnson", 40, 170, "ID003")

# Creating three Car objects with owners
car1 = Car("Toyota Corolla", 2020, "1.8L", 140, "Red", person1)
car2 = Car("Honda Civic", 2021, "2.0L", 158, "Blue", person2)
car3 = Car("Ford Mustang", 2022, "5.0L", 450, "Black", person3)

# Printing the Person objects
print("Persons:")
print(person1)
print(person2)
print(person3)

# Printing the Car objects
print("\nCars:")
print(car1)
print(car2)
print(car3)
