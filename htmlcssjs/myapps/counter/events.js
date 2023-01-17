let n = 0;

function shiftval(amount) {
    const countNow = document.getElementById("counter-val");
    n += amount;
    countNow.innerText = n;

}

function scaleval(coeff) {
    const countNow = document.getElementById("counter-val");
    n *= coeff;
    countNow.innerText = n;
}