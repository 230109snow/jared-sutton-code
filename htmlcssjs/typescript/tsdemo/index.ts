var foo : string = 'bar';
let bar = 'Hi world!';
let arr : number[] = [1, 2, 3]
// will warn about uses such as:
// arr = ['1', 2, 3] 

function greet(name: string) : void {
    console.log(`Hi ${name}!`);
}

/* This complains bc cant make TBody for HTMLElement and it doesnt know that it's converted:

const someTable : HTMLElement | null = document.getElementById('some-table-id') as HTMLTableElement;
someTable.createTBody();

*/
// This works:

const someTable : HTMLTableElement = document.getElementById('some-table-id') as HTMLTableElement;
someTable.createTBody();

//

// Can use `any` type to go back to js typing behavior
let backToJs : any = '2';
backToJs = 2;
//

// Can have it assign type at first assignment:
let tbd : unknown;
tbd = 3; // type of `tbd` becomes number
// Note that an unknown val must be cast before being used to set the value of a typed variable:
let z : unknown;
let x : number = z as number;
//

interface exampleInterface {
    a : string,
    b : number
}
const usingInterface : exampleInterface = {
    a : 'foo',
    b : 2
}


function usingCustomIntf(param : exampleInterface) : void {
    console.log(param);
}
usingCustomIntf(usingInterface);

const notExampleIntf : any = {
    a : 'hi',
    b : 3,
    c : [],
    d : {hello : 'world'}
}
// ^  This still works because it has the correct 'a' and 'b' attributes and types (ie the new object's "shape satisfied the required properties")
// Though, it's NOT of type 'exampleInterface' 

// Can specify alternative types:
interface created_document {
    created : number | Date | string;
}


let w : any = 'string';
let s : string = w;
let n : number = w; // This doesn't complain because it doesnt check types, since 'w' is typed as 'any'