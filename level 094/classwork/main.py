lst4 = ["Luka", "Tamari", "Taso", "Gio", "Zuka", "Zura"]
lst5 = []

for i in lst4[:]: 
    if i[0] == "T":
        lst4.remove(i)
        lst5.append(i)

print(lst5)