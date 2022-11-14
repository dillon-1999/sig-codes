const GET_CODE = document.getElementById('get-code'); 
const RESET_CODE = document.getElementById('reset-button');
const CODE = document.getElementById('code');
const TRANS = document.getElementById('translation');
const OVERLAY = document.getElementById('overlay');
const CLICK_TO_SHOW = document.getElementById('click-to-show');
const PROGRESS_BAR = document.getElementById('progress-bar');

const MAXIMUM = 173;
let LENGTH = MAXIMUM;
let PROGRESS = MAXIMUM - LENGTH;

function genArray(max){
    let numbers = [];
    for(let i = 1; i <= max; ++i){
        numbers.push(i);
    }
    return numbers;
}

function placeCode(code, trans){
    CODE.innerHTML = code;
    TRANS.innerHTML = trans;
}

function hardReset(resetCode){
    if(resetCode){
        placeCode('Code', 'Translation');
    }
    return [genArray(MAXIMUM), MAXIMUM]
}

let numbers = genArray(MAXIMUM);

function genRandom(){
    let rand = Math.floor(Math.random() * LENGTH);
    let code = numbers[rand];
    LENGTH -= 1;
    [numbers[rand], numbers[LENGTH]] = [numbers[LENGTH], numbers[rand]];
    return code;
}

function setProgress(){
    let p = MAXIMUM - LENGTH;
    PROGRESS_BAR.value = p;
    return p;
}
function setOverlay(set){
    CLICK_TO_SHOW.style.display = set ? 'inline' : 'none';
    TRANS.classList.remove(`translation-${!set ? 'hidden' : 'shown'}`);
    OVERLAY.classList.remove(`overlay-${!set ? 'shown' : 'hidden'}`);
    TRANS.classList.add(`translation-${set ? 'hidden' : 'shown'}`);
    OVERLAY.classList.add(`overlay-${set ? 'shown' : 'hidden'}`);
}
// define random number generation
GET_CODE.addEventListener('click', e => {
    // stops button mashing
    if(!GET_CODE.disabled){
        if(LENGTH <= 0){
            [numbers, LENGTH] = hardReset(false);
        }
        
        getCode(genRandom());
        PROGRESS = setProgress();
    }
});

RESET_CODE.addEventListener('click', e => {
    [numbers, LENGTH] = hardReset(true);
    setOverlay(false);
    setProgress();
});

OVERLAY.addEventListener('click', e => {
    setOverlay(false);
});

async function getCode(id){
    GET_CODE.disabled = true;
    const response = await fetch(`${window.location.origin}/getCode?id=${id}`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) =>{
        placeCode(data.code, data.trans);
        setOverlay(true);
        GET_CODE.disabled = false;
    });
}