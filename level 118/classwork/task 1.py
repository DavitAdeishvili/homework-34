import random

students = [ 'mate chikaidze', 'giga kochalidze', 'zuka qoridze',  'gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili', 'nika macharashvili', 'ilia dzindzibadze' ]

leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze", "Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]

random.shuffle(students)
random.shuffle(leaders)

leaders.remove(leaders[-1])

for i in range (len(leaders)):
    print (leaders[i] + " : " + students[i])