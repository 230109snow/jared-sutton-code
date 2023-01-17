function insertchar(char) {

    const calcIO = document.getElementById('calc-io');
    if(calcIO.innerText == "0") {
        calcIO.innerText = char;
    } else {
        calcIO.innerText += char;
    }
}

function evalexpr() {
    const calcIO = document.getElementById('calc-io');
    let input = calcIO.innerText;
    console.log(input);
    let res = parseFloat(eval(input));
    calcIO.innerText = res;
}

function clearcalc() {
    const calcIO = document.getElementById('calc-io');
    calcIO.innerText = 0;
}