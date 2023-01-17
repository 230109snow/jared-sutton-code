setNewWord();

function getElemTxt(elemID) {
    return document.getElementById(elemID).innerText;
}

function setElemTxt(elemID, value) {
    let elemRef = document.getElementById(elemID);
    elemRef.innerText = value;

    // return ?
}

async function rollWord() {
    const wordlength_max = parseInt(document.getElementById('max-word-length').value);
    let apidomainurl = 'https://random-word-api.herokuapp.com/word';
    if(wordlength_max == 3) {
        apidomainurl += '?number=1&length=3';
    } else if(wordlength_max <= 6) {
        apidomainurl += '?number=100';
        // NOTE ^ this part (100 is big) might make the call slower (unconfirmed), but thats easier than handling multiple fetch calls
    } else if(wordlength_max <= 10) {
        apidomainurl += '?number=25';
    } else {
        apidomainurl += '?number=10'
    }
    // NOTE number increases as max length decreases because odds youll get a word at or below the max length get smaller as the max shrinks

    const url = apidomainurl;
    let validword;
    // Suggested by ChatGPT:
    const res = await fetch(url, {method: "GET"});
    const data = await res.json();
    const pulled_words = data;
    for(let w of pulled_words) {
        if(w.length >= 3 && w.length <= wordlength_max) {
            validword = w.toUpperCase();
            break;
        }
    }
    return validword;
    // End of suggestion
}
/* THE FOLLOWING SNIPPET WAS NOT WORKING, BUT THE ABOVE REPLACEMENT FIXED IT AND WAS SUGGESTED TO ME BY ChatGPT.

    fetch(url, {method: "GET"})
        .then((res) => res.json())
        .then((data) => 
            {
                const pulled_words = data;
                //console.log(data);
                for(let w of pulled_words) {
                    if(w.length >= 3 && w.length <= wordlength_max) {
                        validword = w.toUpperCase();
                        console.log(validword);
                        break;
                    }
                }
                return validword;
            })
        //.then(() => {return validword;}) 

*/

async function setNewWord() {
    const rolledword = await rollWord();
    console.log(rolledword);
    setElemTxt('current-secret-word', rolledword);
    return rolledword;
}
