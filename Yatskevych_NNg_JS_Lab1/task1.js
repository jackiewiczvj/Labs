let x = parseFloat(prompt("Введіть координату X:"));
let y = parseFloat(prompt("Введіть координату Y:"));

if (isNaN(x) || isNaN(y)) {
    console.log("Помилка: введіть числові значення.");
} else if (x > 0 && y > 0) {
    console.log(`Точка (${x}, ${y}) знаходиться у I чверті.`);
} else if (x < 0 && y > 0) {
    console.log(`Точка (${x}, ${y}) знаходиться у II чверті.`);
} else if (x < 0 && y < 0) {
    console.log(`Точка (${x}, ${y}) знаходиться у III чверті.`);
} else if (x > 0 && y < 0) {
    console.log(`Точка (${x}, ${y}) знаходиться у IV чверті.`);
} else {
    console.log(`Точка (${x}, ${y}) лежить на осі.`);
}
