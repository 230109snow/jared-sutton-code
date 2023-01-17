"use strict";
const APIlist = ['agify', 'genderize', 'nationalize'];
function gen_profile() {
    const nameinElem = document.getElementById('name-in');
    console.log(nameinElem.value);
    if (!nameinElem) {
        console.log('No element found!');
        return null;
    }
    else if (!nameinElem.value) {
        console.log('No name specified!');
        return null;
    }
    else {
        const name = nameinElem.value;
        for (let d of APIlist) {
            const url = `https://api.${d}.io?name=${name}`;
            fetch(url, { method: "GET" }).then((res) => res.json()).then((dat) => {
                //console.log(dat);
                parseResponseJSON(dat);
            });
        }
    }
    //let responses = 
}
function parseResponseJSON(response) {
    if (response.country) {
        const getEnName = new Intl.DisplayNames(['en'], { type: 'region' });
        for (let i of response.country) {
            console.log(`Country=${getEnName.of(i.country_id)} (Prob=${i.probability})`);
        }
    }
    else if (response.gender) {
        console.log(`Gender=${response.gender} (Prob=${response.probability}, N=${response.count})`);
    }
    else if (response.age) {
        console.log(`Age=${response.age} (N=${response.count})`);
    }
}
