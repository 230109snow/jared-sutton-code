
// Note: need to do `export` to make this available to other JavaScript files
export function fetchCatsFn() {
    const inputVal = document.getElementById('status-code').value;

    document.getElementById('status-code-img').src = `https://http.cat/${inputVal}.jpg`;
}

//default ('non named')export
export default function defaultFn() {

}