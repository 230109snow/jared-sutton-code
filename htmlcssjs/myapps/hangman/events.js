const max_num_of_mistakes = 6;
// IDEA: this could be dynamically determined based on the number of images in a folder containing the various hangman stages labeled by the corresponding number of mistakes?
let guess_counter_val = 0;
let mistake_counter_val = 0;
gamestatus("");

function can_be_spelled_with(word_in, letterstring_in) {
    const word = word_in.toUpperCase();
    const letterstring = letterstring_in.toUpperCase();

    for(let i = 0; i < word.length; i++) {
        let focusedletter = word.charAt(i);
        if (! letterstring.includes(focusedletter)) {
            return false;
        }
    }
    return true;
}

function gamestatus(guessedletters) {
    const secretword = document.getElementById('current-secret-word');
    const tgtword = secretword.innerText.toUpperCase();

    const num_lives_displayed = document.getElementById('current-num-lives');
    num_lives_displayed.innerText = max_num_of_mistakes - mistake_counter_val;

    let res = "Unfinished";
    if(can_be_spelled_with(tgtword, guessedletters)) {
        res = "Victory!";
        document.getElementById('did-i-win').hidden = false;
    } else if(mistake_counter_val >= max_num_of_mistakes) {
        res = "Defeat.";
        let letter_buttons = document.getElementsByClassName("small-button");
        for(let i = 0; i < letter_buttons.length; i++) {
            letter_buttons.item(i).disabled = true;
        }
    } else {
        // if the game hasnt ended, be sure to hide win message:
        document.getElementById('did-i-win').hidden = true;
    }

    return tgtword + " | " + guessedletters + " || " + res;
}

function guessletter(letter) {
    const guesses = document.getElementById('current-guessed-letters');
    guesses.innerText += letter.toUpperCase();

    // disable pressed button:
    const buttonpressed_id = 'lett-' + letter.toUpperCase();
    document.getElementById(buttonpressed_id).disabled = true;
    // add to guess counter:
    guess_counter_val++;
    document.getElementById('guess-counter').innerText = guess_counter_val;
    //TODO maybe check here if out of guesses, and then say 'you lose' if so?

    const secretword = document.getElementById('current-secret-word');
    const tgtword = secretword.innerText.toUpperCase();

    if(! tgtword.includes(letter)) {mistake_counter_val++;}

    console.log(gamestatus(guesses.innerText));
}

function request_new_game() {
    const secretword = document.getElementById('current-secret-word');
    const tgtword = secretword.innerText.toUpperCase();

    // clear guesses and mistakes and lives
    guess_counter_val = 0;
    document.getElementById('guess-counter').innerText = 0;
    document.getElementById('current-guessed-letters').innerText = "";

    mistake_counter_val = 0;
    const num_lives_displayed = document.getElementById('current-num-lives');
    num_lives_displayed.innerText = max_num_of_mistakes;

    // reactivate buttons:
    let letter_buttons = document.getElementsByClassName("small-button");
    for(let i = 0; i < letter_buttons.length; i++) {
        letter_buttons.item(i).disabled = false;
    }

}
