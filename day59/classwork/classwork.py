def get_matrix(n):
    matrix = []
    for i in range(n):
        row = [0] * n
        row[i] = 1
        matrix.append(row)
    return matrix

print(get_matrix(1)) 
print(get_matrix(2)) 
print(get_matrix(5))  