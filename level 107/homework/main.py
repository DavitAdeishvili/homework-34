# task 1

def task1(matrix):
    all_elements = []
    for row in matrix:
        for element in row:
            all_elements.append(element)
    first_max = max(all_elements)
    all_elements.remove(first_max)
    second_max = max(all_elements)
    return first_max + second_max

print(task1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


# task 2

def task2(matrix):
    seen = set()
    last_duplicate = None
    for row in matrix:
        for num in row:
            if num in seen:
                last_duplicate = num
            seen.add(num)
    if last_duplicate is not None :
        return last_duplicate 
    else: 
        "no duplicates"
print(task2([[1, 2, 4], [1, 2, 3], [1, 3, 4]]))

#  task 3

def task3(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for x in arr[:i]:
            if x < arr[i]:
                count += 1
        result.append(str(count))
    return ", ".join(result)

print(task3([1, 2, 3, 4, 1]))