def convert_to_uppercase(strings_list):
    return [string.upper() for string in strings_list]

strings = ["hello", "how are you?", "bye"]
uppercase_strings = convert_to_uppercase(strings)
print(uppercase_strings)