// Shopping List Create a function `add_to_shopping_list` that accepts an item and a quantity. The quantity should default to 1 if not provided.

function add_to_shopping_list(item, quantity = 1){
    console.log(item)
    console.log(quantity)
}

add_to_shopping_list(['apple', 'pear'], 10)
add_to_shopping_list(['apple', 'pear'], 1)