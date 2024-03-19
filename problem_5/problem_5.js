// Function to calculate the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
    while (b != 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

// Function to calculate the least common multiple (LCM) of two numbers
function lcm(a, b) {
    return (a * b / gcd(a, b));
}

// Initialize the variable 'num' to 1
let num = 1;

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Calculate the LCM of 'num' and the current number 'i'
    num = lcm(num, i);
}

// Print the final LCM value
console.log(num);