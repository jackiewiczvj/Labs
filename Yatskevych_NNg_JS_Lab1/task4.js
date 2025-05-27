function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

let result = 20;
for (let i = 21; i <= 40; i++) {
    result = lcm(result, i);
}

console.log(`НСК для чисел від 20 до 40: ${result}`);
