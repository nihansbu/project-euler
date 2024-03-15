function sumEvenFibonacciTerms(limit) {
    let sum = 0;
    let a = 0;
    let b = 1;

    while (a <= limit) {
        if (a % 2 === 0) {
            sum += a;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    return sum;

}

// 4613732
console.log(sumEvenFibonacciTerms(4000000)); 