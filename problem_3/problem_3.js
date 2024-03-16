function findBiggestPrimeFactor(n) {
    let i = 2; // Start with the smallest prime number

    // Loop until i is greater than n
    while (i <= n) { 

        // Check if i is a factor of n
        if (n % i === 0) { 

            // If i is a factor of n, divide n by i to reduce its value
            // This also removes all factors of i from n
            n /= i; 
        } else {

            // If i is not a factor of n, increment i
            // Note: Even though i increments through all integers, it will only divide n if it is a prime number
            // This is because all of i's prime factors would have already been used to divide n in previous iterations
            i++; 
        }
    }

    // Return the largest prime factor
    // At the end of the loop, i will be the largest prime factor of the original n
    return i; 
}

// Call the function with the given number
console.log(findBiggestPrimeFactor(600851475143));