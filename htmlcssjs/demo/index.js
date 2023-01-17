//variable declaration:
let foo = 'a';
let arr = [1, 2.0, 3, 'four'];
console.log(arr)
//constant declaration:
const pi = 3.14;
console.log("this is printed from index.js");

// Note foo, arr and pi are global (can see in webpage console)

//Function definition
function greet() {
    let name = 'jared';
    //  ^ This 'name' variable is only available in the 'function scope'
    console.log("hello " + name);

    if(true && true) {
        // this creates a 'block scope' (min scope for 'let' & 'const' keywords):
        let x = 6;
        var y = 4;
        // can incriment x via:
        x++;
        console.log(x, y);
    }
    // This should throw an error, bc variable is out of scope:
    //console.log(x);
    // This should work bc the minimum scope when declared by 'var' is function scope:
    console.log("y=" + y);

    // '===' denotes value AND type equivalence
    console.log(3=='3', 3==='3');
    // global variables can be modified in a smaller scope, and it persists:
    foo = 'b';
    console.log(foo);
}
greet()
console.log(foo);

// true || false && false = true || (false && false)

// 'Falsey' values: "", null, undefined, NaN, 0
// 'Truthey' values: non-falsey values