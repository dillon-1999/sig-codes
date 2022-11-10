const GET_CODE = document.getElementById('get-code'); 
const CODE = document.getElementById('code');
const TRANS = document.getElementById('translation');
const MAXIMUM = 173;
let LENGTH = MAXIMUM;

function genArray(max){
    let numbers = [];
    for(let i = 1; i <= max; ++i){
        numbers.push(i);
    }
    return numbers;
}

let numbers = genArray(MAXIMUM);
if(!window.localStorage.numbers){
    window.localStorage.numbers = numbers;
}

function genRandom(){
    let rand = Math.floor(Math.random() * LENGTH);
    let code = numbers[rand];
    LENGTH -= 1;
    [numbers[rand], numbers[LENGTH]] = [numbers[LENGTH], numbers[rand]];
    return code;
}

// define random number generation
GET_CODE.addEventListener('click', e => {
    // stops button mashing
    if(!GET_CODE.disabled){
        if(LENGTH <= 0){
            numbers = genArray(MAXIMUM);
            LENGTH = MAXIMUM;
        }
        getCode(genRandom());
    }
});

function placeCode(code, trans){
    CODE.innerHTML = code;
    TRANS.innerHTML = trans;
}

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
        GET_CODE.disabled = false;
    });
}