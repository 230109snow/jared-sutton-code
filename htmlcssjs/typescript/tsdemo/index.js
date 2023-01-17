"use strict";
var foo = 'bar';
let bar = 'Hi world!';
let arr = [1, 2, 3];
// will warn about uses such as:
// arr = ['1', 2, 3] 
function greet(name) {
    console.log(`Hi ${name}!`);
}
/* This complains bc cant make TBody for HTMLElement and it doesnt know that it's converted:

const someTable : HTMLElement | null = document.getElementById('some-table-id') as HTMLTableElement;
someTable.createTBody();

*/
// This works:
const someTable = document.getElementById('some-table-id');
someTable.createTBody();
//
// Can use `any` type to go back to js typing behavior
let backToJs = '2';
backToJs = 2;
//
// Can have it assign type at first assignment:
let tbd;
tbd = 3; // type of `tbd` becomes number
const usingInterface = {
    a: 'foo',
    b: 2
};
function usingCustomIntf(param) {
    console.log(param);
}
usingCustomIntf(usingInterface);
const notExampleIntf = {
    a: 'hi',
    b: 3,
    c: [],
    d: { hello: 'world' }
};
