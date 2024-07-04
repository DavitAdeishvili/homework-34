def convert_to_uppercase(strings_list):
    return [string.upper() for string in strings_list]

strings = ["david", "someone 1", "somoeone 2"]
uppercase_strings = convert_to_uppercase(strings)
print(uppercase_strings)