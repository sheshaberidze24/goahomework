class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"

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

# Creating three objects for each class

# Cars
car1 = Car("Toyota", "Corolla", 2020)
car2 = Car("Honda", "Civic", 2022)
car3 = Car("Ford", "Focus", 2019)

# Animals
animal1 = Animal("Dog", "Buddy", 5)
animal2 = Animal("Cat", "Whiskers", 3)
animal3 = Animal("Parrot", "Polly", 2)

# Students
student1 = Student("Alice", 10, "Greenwood High")
student2 = Student("Bob", 8, "Springfield Academy")
student3 = Student("Charlie", 12, "Riverside School")

# Printing the objects
print("Cars:")
print(car1)
print(car2)
print(car3)

print("\nAnimals:")
print(animal1)
print(animal2)
print(animal3)

print("\nStudents:")
print(student1)
print(student2)
print(student3)
