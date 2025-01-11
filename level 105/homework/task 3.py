def diagonal_sum(matrix):
    n = len(matrix)
    diagonal1 = 0
    diagonal2 = 0
    
    for i in range(n):
        diagonal1 += matrix[i][i]
        diagonal2 += matrix[i][n - 1 - i]
    
    return diagonal1, diagonal2

print (diagonal_sum([[1, 2, 3],[4, 5, 6],[7, 8, 9]]))