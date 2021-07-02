let numberInput = document.querySelector("input");

let numberButtons = document.querySelectorAll("button");

let tempNumber = 0;

let operationMode = "";

let newNumber = 0;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function() {
        if (numberButtons[i].innerText >= "0" && numberButtons[i].innerText <= "9") {
            numberInput.value += numberButtons[i].innerText;
        }
    });
}

document.querySelector("#sum").addEventListener("click", function() {
    tempNumber = numberInput.value;
    numberInput.value = "";
    operationMode = "+";
});

document.querySelector("#sub").addEventListener("click", function() {
    tempNumber = numberInput.value;
    numberInput.value = "";
    operationMode = "-";
});

document.querySelector("#mul").addEventListener("click", function() {
    tempNumber = numberInput.value;
    numberInput.value = "";
    operationMode = "*";
});

document.querySelector("#dev").addEventListener("click", function() {
    tempNumber = numberInput.value;
    numberInput.value = "";
    operationMode = "/";
});


document.querySelector("#eq").addEventListener("click", function() {
    // add a switch case 
    switch (operationMode) {
        case "+":
            newNumber = numberInput.value;
            numberInput.value = parseInt(newNumber) + parseInt(tempNumber);
            break;

        case "-":
            newNumber = numberInput.value;
            numberInput.value = parseInt(tempNumber) - parseInt(newNumber);
            break;
        case "*":
            newNumber = numberInput.value;
            numberInput.value = parseInt(newNumber) * parseInt(tempNumber);
            break;
        case "/":
            newNumber = numberInput.value;
            numberInput.value = parseInt(tempNumber) / parseInt(newNumber);
            break;

        default:
            break;
    }
});
document.getElementById("clear").addEventListener("click", function() {
    numberInput.value = ""
})