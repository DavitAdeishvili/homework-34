function dollarToLari(list1) {
    let list2 = [];
    list1.forEach(function(i) {
        i *= 3;
        list2.push(i);
    });
    return list2;
}

console.log(dollarToLari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));