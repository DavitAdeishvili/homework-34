def count_vowels(str):
    vowels = "aeiouAEIOU"
    count = 0
    for char in str:
        if char in vowels:
            count += 1
    return count
    
vowels = count_vowels ("apple")