function func(number, operation) {
    return operation(number);
}

let result = func(2, num => num ** 2); // Піднесення до квадрату
result = func(result, num => num ** 2); // Піднесення до 4-тої ступені

console.log("Результат піднесення до 4-тої ступені:", result);
