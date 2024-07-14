# key --- value / გასაღები ----- მნიშვნელობა
person = {
    "name": "Daviti",
    "surname": "gerdzelishvili",
    "age": 20,
    "fav_food": ["xinkali", "LOBIO", "mwtsvadi", "bebos xachapuri", "bebos kampoti"],
    "my_family": {
        "name": "Badri"
    },
}
copy_dict = person.copy() # copy dict
copy_dict = dict(person) # copy dict
arry = ["davit", "grdzelishvili"]
arry_2 = list(arry)
arry[0] = "gio"


print(type(person))
print("------------------------------------")
print()

# indexing
print(person["fav_food"])
print("get")
# get method
print(person.get("fav_food"))

print()

print("---------------------------------------------")
print(person.keys())
# changing values
print("----------------------------------------")
print()

# indexing
person["name"] = "saba"
person["surname"] = "oqruashvili"
person["age"] = 17
print(person)
print()
print("------------------just-values------------------------")
print(person.values())
print("------------------------------------------------------")
print()
print(person.items()) # key / value  
print()
print("--------------------update-method--------------------------")
# ამატებს ახალ key / value ან ცვლის ძველს
person.update({"fav_car": "nissan skyline gt r34 აწყვეტილები 2 eddition"})
print(person)
print()
person.update({"name": "rengoku"})
print(person)
print()
# pop element
person.pop("my_family")
print()
print(person)
print()
# pop last element
person.popitem()
print()
print(person)
print()
# del person can delete whole dict
# print(person)
del person["name"]
print(person)
print()
person.clear()
print(person)
print("-------------------------------------------------------------")
for key in copy_dict:
    print(copy_dict.get(key))
print()
for key, value  in copy_dict.items():
    print(key, value)
davit_dict = {}

# Day 18:
# შექმენით dict მანაქანაზე
# mark
# name
# year
# engine
print("---------------------------------------")
print()
car = { 
    "mark": "ford",
    "name": "mustang",
    "age": 1967,
    "engine": 3.3
}

# შექმენთ dict თქვენს თავზე გამოიყენეთ
# name 
# age
grdzelos_dict = {
    "name": "nika",
    "age": 16
}
# და დაამატეთ 2 მეთოდით email, surname
# update()
# dict_name["surname"] = "grdzelishvili" 
grdzelos_dict.update({"surname": "sheshaberidze"})
grdzelos_dict["email" ]= "youremail@gmai.com"
print(grdzelos_dict)
print()
print("----------------------------------")
print()
# for loop გამოყენებით დამიპრინტეთ აწ უკვე შექმენილი person value
for key in grdzelos_dict:
    print(grdzelos_dict[key])
    print(grdzelos_dict.get(key))

# შექმენით ცარიელი dict {}
print()
print("-------------------------------------------------")
print()
empty_dict = {}
for i in range(1, 1001):
    empty_dict["item_{0}".format(i)] = i
print(empty_dict)
# და 1000 key დაამატეთ სხვადასხვა სახელებით იყოს 
# item_1
# item_2 
# და ასე შემდეგ 
# მათ მიანიჭეთ ციფების მნიშვნელობა
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# formats
age = 20 
print()
print("------------------------------------------------")
print("davit grdzelisvhili, " + str(age) + " wlis aris " ) 





name = "guja"
print("davit grdzelisvhili, {0} {1}".format(20, "o mai gad" ))
print(f"davit grdzelisvhili, {20} o mai gad {name}")

