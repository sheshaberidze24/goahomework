def print_name(user_name):
    return "hello" + user_name

print(print_name("nika"))

# შექმენით ფუნქცია, რომელიც მიიღებს მთელი რიცხვების სიას. თქვენ უნდა გაფილტროთ ეს სია და ახალ სიაში დაამატოთ მარტო ლუწი რიცხვები. საბოლოოდ დააბრუნეთ ახალი სია.

def filter_evens(num_list):
    res = []
    for i in num_list:
        if i %2 == 0:
            res.append(i)

    return res

starting_list = list(range(11))
print(starting_list)
print(filter_evens(starting_list))