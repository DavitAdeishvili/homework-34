#task1 

#def filter_odd(list1):
 #   list2 = []
 #   for member in list1:
#           list2.append(member)  
 #   return list2  

#something1 = filter_odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
#print(something1)

#function is thing that can work while it is called it can be called many times
#parametre is thing in function that is writen in (here) next to the function name. (it is making a thing like variable)
#argumenta are values passed to a function when it is called.
#we can call function by write its name outside a function and write parametre if its have one.2

#task 2

#def even_sum (integer_list):
#    list1 = []
 #   for integer in integer_list:
 #       if integer % 2 == 0:
 #           list1 . append(integer)
 #   return sum (list1)
#something = even_sum ([1,2,3,4,5,6,7,8,9,10])
#print (something)

#task 3

def odd_index_sum (integer_list):
    list1 = []
    for integer in integer_list:
        if len (integer_list) % 2 == 0:
            list1. append (integer)
    return sum (list1)
something = odd_index_sum ([1,2,3,4,5,6,7,8,9,10])
print (something)