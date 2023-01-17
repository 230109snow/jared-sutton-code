let num = 0;
function increment() {
    const countElem = document.getElementById('count');
    countElem.innerText = ++num;
}
function decrement() {
    const countElem = document.getElementById('count');
    countElem.innerText = --num;
}
function reset() {
    const countElem = document.getElementById('count');
    countElem.innerText = 0;
    num = 0;
}
function multnum(coeff) {
    const countElem = document.getElementById('count');
    countElem.innerText *= coeff;
    num *= coeff;
}

function fizzbuzz() {
    console.log(document.querySelector('#fizzbuzz-in').value);
}


// example of a 'callback' function:
const callbackfunction = function(functionAsParam) {
    functionAsParam();
}

//SECTION - function construction
// other ways to create functions:
const fn = function() {};
//invoke via `fn();`

// create a function pointing to another function
const fn2 = fizzbuzz;
//invoke via `fn2();`

//arrow function
const fn3 = () => {};

//
// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function is defined and then immediately called")
})();