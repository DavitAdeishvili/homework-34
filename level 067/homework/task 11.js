function Cart() {
    this.items = [];
    this.addItem = function(item) {
        this.items.push(item);
    };
    this.getItems = function() {
        console.log('Items in cart: ' + this.items.join(', '));
    };
}