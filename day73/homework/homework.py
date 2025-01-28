people = [
    {"name": "ანა", "age": 25, "height": "165 სმ", "gender": "ქალი"},
    {"name": "ლევანი", "age": 30, "height": "175 სმ", "gender": "კაცი"},
    {"name": "ნინო", "age": 22, "height": "160 სმ", "gender": "ქალი"},
    {"name": "გიორგი", "age": 28, "height": "180 სმ", "gender": "კაცი"}
]

# თითოეული ობიექტის ფორმატირებული გამოტანა
for index, person in enumerate(people, start=1):
    print(f"{index}) ადამიანი:")
    print(f"სახელი: {person['name']},")
    print(f"ასაკი: {person['age']},")
    print(f"სიმაღლე: {person['height']},")
    print(f"სქესი: {person['gender']}")
    print("---------------------")
