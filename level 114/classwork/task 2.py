def manual_join(symbol, str1):
    str2 = ""
    str1 = str1.split()
    for i in str1:
        str2 += i + symbol
    str2 = str2[0:-1]
    return str2

print (manual_join("*", "qwe qwe qwe"))