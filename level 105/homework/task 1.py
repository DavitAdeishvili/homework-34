def matrix_sum(matrix):
    total = 0
    for row in matrix:
        for element in row:
            total += element
    return total

print(matrix_sum([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))