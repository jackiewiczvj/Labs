// Генерація масиву з 12 випадкових цілих чисел
let array = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));

// Фільтрація чисел, кратних 5, та сортування
let filteredSortedArray = array.filter(num => num % 5 === 0).sort((a, b) => a - b);

console.log("Згенерований масив:", array);
console.log("Числа, кратні 5 (відсортовані):", filteredSortedArray.join(", "));
