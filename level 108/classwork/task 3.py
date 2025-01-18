# 3) ( ვისაც მეორე გაქვთ გაკეთებული ) შევქმნათ ფუნქცია რომელიც იღებს სტრინგს და აბრუნებს ყველაზე გრძელ სტრინგის იმ ნაწილს სადაც ასოები არ მეორდება

def longest_unique_substring(str1):
    seen = ""
    for i in str1:
        if i not in seen:
            seen += i
        else:
            seen = ""
    return seen 

print (longest_unique_substring("bbbbb"))
print (longest_unique_substring(""))
print (longest_unique_substring("pwwkew"))