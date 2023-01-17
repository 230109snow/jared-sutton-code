// 2 builtin ways to send http requests:
// 1. XML Http request
// 2. Fetch API (used below)

import { fetchCatsFn } from "./fetchCats.js";
// No brackets are needed if the function is default:
import defaultFn from "./fetchCats.js";

// This gives access to fetchCats when the script HTML element is type="module"
window.fetchCats = fetchCatsFn;

/* alternative:
document.getElementById('id-of-button-that-does-function').onclick = () =>
{
    fetchCats();
    return false;
}
*/

let apiKey;
fetch('./apiKey.json')
    .then((res) => res.json())
    .then((data) => {apiKey = data.TheCatAPI;})

function getCats() {
    const numCats = document.getElementById('img-num').value;
    const breed = document.getElementById('breed').value;
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${numCats}&breed_id=${breed}`, {
        method: "GET",
        headers: {
            'x-api-key': apiKey
        }
    }
    ).then((res) => res.json()).then((data) => {
        for (let i = 0; i < data.length; i++) {

            const imgTag = document.createElement('img');
            imgTag.src = data[i].url;
            imgTag.style="width: 100%; margin: 10px 0;";
            document.getElementById('the-cat-api').appendChild(imgTag);
        }
    })
}

// From hangman fetchword.js (first try):

/* // Max and min hangman word lengths:
const hangman_lenmin = 3;
const hangman_lenmax = 25;




function getRandomWord(lengthcode, minlen, maxlen) {
    let apidomainurl;

    if(minlen < hangman_lenmin) {minlen = hangman_lenmin;};
    if(maxlen > hangman_lenmax) {maxlen = hangman_lenmax;};
    if(minlen > hangman_lenmax) {
        minlen = maxlen;
    } else if(maxlen < hangman_lenmin) {
        maxlen = minlen;
    }
    
    if(lengthcode >= minlen && lengthcode <= maxlen) {
        apidomainurl = `https://random-word-api.herokuapp.com/word?number=1&length=${lengthcode}`;
    } else {
        apidomainurl = 'https://random-word-api.herokuapp.com/word?number=1';
    }

    const url = apidomainurl;
    fetch(url, {method: "GET"})
        .then((res) => res.json())
        .then((data) => 
            {
                const pulled_word = data[0];
                let wordout = pulled_word.toUpperCase();
                console.log(wordout);
                return wordout;
            })
}

// call this via eg: 
// rollWord(self, 3, 10) for some word with length bw 3 and 10
// rollWord(self, N, N) for a length N word
function XrollWord(elem, minlen, maxlen) {
    let word;
    if(minlen === maxlen) {
        word = getRandomWord(minlen, minlen, minlen);
        console.log(word);
    } else if(minlen > maxlen) {
        console.log("rollWord min max lengths backwards. assuming min and max should be flipped. see following elem for error:");
        console.log(elem);
        word = getRandomWord(0, maxlen, minlen);
        while(word.length < maxlen || word.length > minlen) {
            word = getRandomWord(0, maxlen, minlen);
        }
    } else {
        word = getRandomWord(0, minlen, maxlen);
        while(word.length < minlen || word.length > maxlen) {
            word = getRandomWord(0, minlen, maxlen);
        }
    }

    console.log(word);
    return word;
} */