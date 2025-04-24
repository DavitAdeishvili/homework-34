function maskCreditCards(cards) {
    return cards.map(card => {
        return "************" + card.slice(-4);
    });
}

console.log(maskCreditCards(["1234567812345678", "8765432187654321", "1111222233334444"]));