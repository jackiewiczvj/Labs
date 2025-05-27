let numbers = prompt("Введіть послідовність натуральних чисел через пробіл:").split(" ").map(Number);
let filteredNumbers = numbers.filter(num => (num >= 10 && num <= 99) && (num % 9 === 0 || num.toString().includes("9")));

console.log("Двозначні числа, що діляться на 9 або містять цифру 9:", filteredNumbers);
