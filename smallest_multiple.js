/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) { 
    
    let n = 1;
    function largestPower(n, ceiling) {
        let p;
        let e = 2, 
        largest = n;
        while ((p = Math.pow(n, e)) <= ceiling) {
            largest = p;
            e += 1;
        }
        return largest;
    }

    function isPrime(n) {
        let ceiling = Math.ceil(Math.sqrt(n));
        for (let i = 3; i <= ceiling; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 3; i <= ceiling; i += 2) {
        if (isPrime(i)) {
            n *= largestPower(i, ceiling);
        }
    }
    return n * largestPower(2, ceiling);
};