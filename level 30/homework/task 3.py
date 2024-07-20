def odd_index_sum(numbers):
    sum_odd = 0
    for i in range(1, len(numbers), 2):
        sum_odd += numbers[i]
    return sum_odd

print (odd_index_sum ([1,2,3,4,5,6,7,8,9,10]))