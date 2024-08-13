# def greet(): # def კომპიუტერს ეუბნევა იმას რომ ცვლადში შევინახოთ კოდი
#     print("hello nika")
#     print(5 +5)

# greet()
# greet()
# greet()
# greet()

# def make_sendwich(ingredient1, ingredient2):
#     print("open bread")
#     print("add" + ingredient1 + ingredient2)
#     print("close bread")


# make_sendwich("cheese")
# make_sendwich("potato")
# make_sendwich("chicken")


def greet(name):
    print("hello" + name)

greet("nika")
greet("gela")
greet("luka")


def even_odd(numbers_list):
    for number in numbers_list:
        if number % 2 == 0:
            print(str(number) + " is even")
        else:
            print(str(number) + " is odd")


even_odd([1, 2, 3, 4, 5, 6, 7])




