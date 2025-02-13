
# ფუნქცია, რომელიც მიიღებს მატრიცას და დააბრუნებს ელემენტების სიგრძეების მატრიცას
def matrix_element_lengths(matrix):
    return [[len(str(element)) for element in row] for row in matrix]

matrix = [["hello", "world"], ["python", "rocks"], ["GPT", "AI"]]  
result = matrix_element_lengths(matrix)  # ფუნქციის გამოძახება და შედეგის მიღება
print(result)  # შედეგი: [[5, 5], [6, 5], [3, 2]]