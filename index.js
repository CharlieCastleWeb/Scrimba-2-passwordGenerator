

let charArr = generateCharArr(33, 127);
let randomChar;
let newPassword=[];
let passwordDivs = document.getElementsByClassName("password");

function generatePasswords(num) {
    for(let i = 0; i<4; i++){
        newPassword = [];
        for(let j=0; j<num; j++) {
            randomChar = (Math.floor(Math.random()*94));
            newPassword.push(charArr[randomChar]);
        }
        passwordDivs[i].textContent = newPassword.join("");
    }
}

function generateCharArr(charStart, charEnd)  {
    let arr = [];
    for( let i = charStart; i<charEnd; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}