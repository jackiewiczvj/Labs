function countNumbersInString(str) {
    let words = str.split(" ");
    let numberPattern = /^[1-9][0-9.]*$/;
    let count = words.filter(word => numberPattern.test(word)).length;
    return count;
}

let inputString = prompt("Введіть текстовий рядок:");
console.log("Введений рядок:", inputString);
console.log("Кількість чисел у рядку:", countNumbersInString(inputString));
