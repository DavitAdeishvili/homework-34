const introduce = ({ name = "მაია", age = 25, city = "თბილისი" } = {}) => `გამარჯობა, მე ვარ ${name}, ${age} წლის და მცხოვრები ვარ ${city}-ში.`;

console.log(introduce({name: "david", age: 123456789, city: "senaki"}))
console.log(introduce())