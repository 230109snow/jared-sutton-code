

const APIlist : string[] = ['agify', 'genderize', 'nationalize'];

interface nameProfile {
    name : string;
    age?: number;
    gender?: string;
    country?: Array<countryAttribute>;
    count?: number;
    probability?: number;
}

interface countryAttribute {
    country_id : string;
    probability : number;
}

function gen_profile() : any {
    const nameinElem : HTMLInputElement | null = document.getElementById('name-in') as HTMLInputElement;
    console.log(nameinElem.value);

    if(!nameinElem) {
        console.log('No element found!');
        return null;
    } else if(!nameinElem.value) {
        console.log('No name specified!');
        return null;
    } else {
        const name : string = nameinElem.value;
        
        for(let d of APIlist) {
            const url : string = `https://api.${d}.io?name=${name}`;
        
            fetch(url, {method: "GET"}).then((res) => 
                res.json()).then((dat : nameProfile) =>
                    {
                        //console.log(dat);
                        parseResponseJSON(dat);
                    }
                )
        }
    }
    
    //let responses = 
}

function parseResponseJSON(response : nameProfile) {
    if(response.country) {
        const getEnName = new Intl.DisplayNames(['en'], { type: 'region' });
        for(let i of response.country) {
            console.log(`Country=${getEnName.of(i.country_id)} (Prob=${i.probability})`);
        }
    } else if(response.gender) {
        console.log(`Gender=${response.gender} (Prob=${response.probability}, N=${response.count})`)
    } else if(response.age) {
        console.log(`Age=${response.age} (N=${response.count})`);
    }
}
