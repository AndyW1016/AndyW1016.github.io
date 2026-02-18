function getCounter() {
    return parseInt(document.getElementById("counter").innerText);
}

// increase and decrease counter
function tickUp() {
    let counterElement = document.getElementById("counter");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue + 1;
}

function tickDown() {
    let counterElement = document.getElementById("counter");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue - 1;
}

// for loop
function runForLoop() {
    let limit = getCounter();
    let resultSpan = document.getElementById("forLoopResult");
    let resultString = "";

    for (let i = 0; i <= limit; i++) {
        // Add a space before the number if it's not the first one
        resultString += (i === 0 ? "" : " ") + i;
    }
    
    resultSpan.innerText = resultString;
}

// show odd numbers
function showOddNumbers() {
    let limit = getCounter();
    let resultSpan = document.getElementById("oddNumberResult");
    let resultString = "";

    for (let i = 1; i <= limit; i++) {
        if (i % 2 !== 0) {
            resultString += (resultString === "" ? "" : " ") + i;
        }
    }

    resultSpan.innerText = resultString;
}

// print reverse array to console
function addMultiplesToArray() {
    let limit = getCounter();
    let resultArray = [];

    for (let i = limit; i >= 5; i--) {
        if (i % 5 === 0) {
            resultArray.push(i);
        }
    }
    console.log(resultArray);
}

// print car from form to console
function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;
    let myCar = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(myCar);
}

// load cars from footer
function loadCar(carId) {
    let selectedCar;

    if (carId === 1) {
        selectedCar = carObject1;
    } else if (carId === 2) {
        selectedCar = carObject2;
    } else if (carId === 3) {
        selectedCar = carObject3;
    }

    if (selectedCar) {
        document.getElementById("carType").value = selectedCar.cType;
        document.getElementById("carMPG").value = selectedCar.cMPG;
        document.getElementById("carColor").value = selectedCar.cColor;
    }
}

// change paragraph color
function changeColor(colorId) {
    let paragraph = document.getElementById("styleParagraph");

    if (colorId === 1) {
        paragraph.style.color = "red";
    } else if (colorId === 2) {
        paragraph.style.color = "green";
    } else if (colorId === 3) {
        paragraph.style.color = "blue";
    }
}