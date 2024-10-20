// array length --- ეს არის თვისება, რომელიც აჩვენებს მასივში ელემენტების რაოდენობას.

// let arr = [1, 2, 3];
// console.log(arr.length);

// let emptyArr = [];
// console.log(emptyArr.length);

// let mixedArr = ['apple', 10, true];
// console.log(mixedArr.length);

// -------------------------------------------------------------------------------------------------------------------------------------------

// array toString() ---  მეთოდი, რომელიც მასივის ყველა ელემენტს აერთიანებს სტრიქონად, გამოყოფილი მძიმით.

// let arr = [1, 2, 3];
// console.log(arr.toString());

// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.toString());

// let mixedArr = ['Hello', 123, true];
// console.log(mixedArr.toString());

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Array at() ---  ამ მეთოდით შესაძლებელია მასივიდან ელემენტის მიღება, მითითებული ინდექსით.

// let arr = [10, 20, 30, 40];
// console.log(arr.at(1));

// console.log(arr.at(-1));

// let names = ['Alice', 'Bob', 'Charlie'];
// console.log(names.at(2));


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Array join() --- აერთიანებს მასივის ყველა ელემენტს სტრიქონად, დაყოფილი მითითებული ელემენტით.

// let arr = [1, 2, 3];
// console.log(arr.join('-'));

// let words = ['hello', 'world'];
// console.log(words.join(' '));

// let numbers = [10, 20, 30];
// console.log(numbers.join());

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Array pop() --- შლის და აბრუნებს მასივის ბოლო ელემენტს.

// let arr = [1, 2, 3];
// console.log(arr.pop());
// console.log(arr);

// let letters = ['a', 'b', 'c'];
// console.log(letters.pop());
// console.log(letters);

// let emptyArr = [];
// console.log(emptyArr.pop());

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Array push() --- ამატებს ახალ ელემენტებს მასივის ბოლოში და აბრუნებს ახალი ზომას.

// let arr = [1, 2];
// console.log(arr.push(3));
// console.log(arr); 

// let letters = ['a', 'b'];
// console.log(letters.push('c', 'd'));
// console.log(letters);

// let emptyArr = [];
// console.log(emptyArr.push(100));
// console.log(emptyArr);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Array shift() --- შლის და აბრუნებს მასივის პირველ ელემენტს.

// let arr = [1, 2, 3];
// console.log(arr.shift());
// console.log(arr);

// let fruits = ['apple', 'banana'];
// console.log(fruits.shift()); 
// console.log(fruits);

// let emptyArr = [];
// console.log(emptyArr.shift());

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Array unshift() --- ამატებს ახალ ელემენტებს მასივის დასაწყისში და აბრუნებს ახალი ზომას.

// let arr = [2, 3];
// console.log(arr.unshift(1)); 
// console.log(arr); 

// let letters = ['b', 'c'];
// console.log(letters.unshift('a')); 
// console.log(letters); 

// let emptyArr = [];
// console.log(emptyArr.unshift(5)); 
// console.log(emptyArr); 

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Array delete() --- შლის კონკრეტული ელემენტს, მაგრამ ტოვებს მის ადგილს undefined-ით.

// let arr = [1, 2, 3];
// delete arr[1];
// console.log(arr);

// let fruits = ['apple', 'banana', 'cherry'];
// delete fruits[0];
// console.log(fruits); 

// let numbers = [10, 20, 30];
// delete numbers[2];
// console.log(numbers); 

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Array concat() --- აერთიანებს ორ ან მეტ მასივს ახალ მასივად.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// console.log(arr1.concat(arr2)); 

// let fruits = ['apple', 'banana'];
// let moreFruits = ['cherry', 'date'];
// console.log(fruits.concat(moreFruits));

// let numbers = [10, 20];
// let letters = ['a', 'b'];
// console.log(numbers.concat(letters)); 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Array indexOf() --- მეთოდი ეძებს მასივში მოცემულ მნიშვნელობას და აბრუნებს მის პირველ ინდექსს. თუ ელემენტი არ მოიძებნება, მეთოდი აბრუნებს -1-ს.

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(30)); 
// console.log(numbers.indexOf(60)); 

// let fruits = ['apple', 'banana', 'cherry', 'banana'];
// console.log(fruits.indexOf('banana')); 
// console.log(fruits.indexOf('grape')); 

// let letters = ['a', 'b', 'a', 'c', 'a'];
// console.log(letters.indexOf('a')); 
// console.log(letters.indexOf('a', 2)); 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Array lastIndexOf() --- მეთოდი ეძებს მითითებულ ელემენტს მასივში და აბრუნებს მის ბოლო ინდექსს, ანუ ინდექსს, სადაც ეს ელემენტი ბოლოს გვხვდება. თუ ელემენტი არ მოიძებნება, მეთოდი აბრუნებს -1-ს.

// let numbers = [10, 20, 30, 40, 30];
// console.log(numbers.lastIndexOf(30)); // 4 (ბოლო "30" არის 4 ინდექსზე)

// let fruits = ['apple', 'banana', 'cherry', 'banana'];
// console.log(fruits.lastIndexOf('banana')); // 3 (ბოლო "banana" არის 3 ინდექსზე)

// let letters = ['a', 'b', 'a', 'c', 'a'];
// console.log(letters.lastIndexOf('a', 2)); // 2 (ძებნა იწყება მეორე ინდექსიდან და ბოლო "a" იპოვება 2-ზე)

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Array includes() --- მეთოდი აბრუნებს true ან false, იმის მიხედვით, მოიძებნება თუ არა მითითებული ელემენტი მასივში. თუ ელემენტი მოიძებნება, აბრუნებს true, წინააღმდეგ შემთხვევაში — false.

// let numbers = [10, 20, 30, 40];
// console.log(numbers.includes(30)); 

// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.includes('banana'));

// let letters = ['a', 'b', 'c', 'd'];
// console.log(letters.includes('c', 2)); 

// ----------------------------------------------------------------------------------------------------------------------------------------------

//  Array sort() --- მეთოდი ალაგებს მასივის ელემენტებს ზრდადობით ანბანის მიხედვით. სტანდარტულად, ალაგებს სტრიქონების (ლექსიკოგრაფიულად), მაგრამ რიცხვების ლოგიკური ალგორითმით დასალაგებლად საჭიროა დამატებითი ფუნქციის მიწერა.

// let fruits = ['apple', 'cherry', 'banana'];
// fruits.sort();
// console.log(fruits);0

// let numbers = [10, 5, 100, 1];
// numbers.sort();
// console.log(numbers);

// let moreNumbers = [10, 5, 100, 1];
// moreNumbers.sort((a, b) => a - b);
// console.log(moreNumbers);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Array reverse() --- მეთოდი აბრუნებს მასივის ელემენტების რიგითობას საპირისპიროდ. ეს ნიშნავს, რომ პირველი ელემენტი ხდება ბოლო და პირიქით.

// let numbers = [1, 2, 3];
// numbers.reverse();
// console.log(numbers); 

// let fruits = ['apple', 'banana', 'cherry'];
// fruits.reverse();
// console.log(fruits); 

// let moreNumbers = [1, 2, 3];
// moreNumbers.sort().reverse();
// console.log(moreNumbers);