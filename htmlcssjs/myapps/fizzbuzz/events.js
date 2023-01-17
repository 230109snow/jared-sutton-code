function fizzbuzz(event) {
    // So page isnt refreshed when this is used in a form element:
    event.preventDefault();
    const input = parseInt(document.querySelector('#fizzbuzz-in').value);

    // the following would stop the passed event from triggering onsubmit attributes of parent elements:
    //event.stopPropagation();

    // input validation:

    
    let output = "";
    if(input <= 0) {
        console.log("input is non positive");
    } else if (input > 100) {
        console.log("input is too big!");
    } else {
        for(let n = 1; n <= input; n++) {
            if(n % 15 == 0) {
                console.log("FizzBuzz");
                output += 'FizzBuzz' + '\n';
            } else if (n % 5 == 0) {
                console.log("Buzz");
                output += 'Buzz' + '\n';
            } else if (n % 3 == 0) {
                console.log("Fizz")
                output += 'Fizz' + '\n';
            } else {
                console.log(n);
                output += n.toString() + '\n';
            }
        }
        const fizzbuzzresult = document.getElementById('fizzbuzz-result');
        fizzbuzzresult.innerText = output;
    }
}

/*
Fizzbuzz is a small program that takes in a positive integer n and prints the following for all positive integer less than or equal to n, in ascending order
- If the number is divisible by 3, print "Fizz"
- If the number is divisible by 5, print "Buzz"
- If the number is divisible by 15, print "FizzBuzz"
- If number is not divisible by 3, 5, or 15, then print the number itself
*/