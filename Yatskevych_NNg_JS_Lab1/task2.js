let numbers = prompt("Введіть послідовність натуральних чисел через пробіл:").split(" ").map(Number);
let count = numbers.filter(num => num >= 10 && num <= 99).length;

console.log(`Кількість двозначних чисел: ${count}`);
