let headSnake = [6, 11, 16, 21];
const maxPositionSnake = 25;
const startPosition = 1;
let currentPosition = startPosition;
const btn = document.getElementById("cube")
const valueCube = document.getElementById("value-cube")
const infoHead = document.getElementById("info-head")
const infoWon = document.getElementById("info-won")
const elements = document.querySelectorAll('table td');

function randomNumber() {
    let num = Math.floor(Math.random() * 6) + 1;
    return num;
}

function checkNumber(number) {
    let checkNumber = number;
    if (checkNumber > maxPositionSnake) {
        checkNumber = maxPositionSnake;
    }
    return checkNumber;
}

function checkHead(number, arr) {
    let position = number;
    if(arr.indexOf(number) != -1) {
        position = 1;
    }
    return position;
}

function tableChange(position) {
    for (let elem of elements) {
        if (position == elem.innerHTML) {
            elem.classList.add('current')
        } else {
            elem.classList.remove("current");
        }
    }
}

function step() {
    let randomNum = randomNumber();
    valueCube.innerHTML = randomNum;
    currentPosition += randomNum;
    currentPosition = checkHead(currentPosition, headSnake);

    if (currentPosition != 1) {
        currentPosition = checkNumber(currentPosition);
        console.log(currentPosition);
        infoHead.innerHTML = currentPosition;

        tableChange(currentPosition);

        if(currentPosition == maxPositionSnake) {
            infoWon.innerHTML = "You won";
        }
    } else {
        infoHead.innerHTML = startPosition;
        alert("ups")
    }
}

btn.addEventListener("click", step);

function oldCode() {
    valueCube.innerHTML = num;

    console.log(num, currentPosition);
    let b = num + currentPosition;
    if (b > maxPositionSnake) {
        btn.disabled = true;
        let a = b - maxPositionSnake;
        currentPosition = a + currentPosition;
        console.log('end')
        infoWon.innerHTML = "You won";
    } else if (currentPosition == maxPositionSnake) {
        btn.disabled = true;
        console.log('end')
        infoWon.innerHTML = "You won";
    } else {
        currentPosition = num + currentPosition;
    }

    if (currentPosition === 6 || currentPosition === 11 || currentPosition === 16 || currentPosition === 21) {
        currentPosition = 1;
        console.log('head');
        infoHead.innerHTML = 'head';
    } else {
        infoHead.innerHTML = '';
    }

    for (let elem of elements) {
        if (currentPosition == elem.innerHTML) {
            console.log(elem);
            elem.classList.add('current')
        } else {
            elem.classList.remove("current");
        }
    }

    console.log(currentPosition);
}