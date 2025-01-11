def swap_rows_and_columns(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    return matrix

print (swap_rows_and_columns([[1, 4, 7],[2, 5, 8],[3, 6, 9]]))