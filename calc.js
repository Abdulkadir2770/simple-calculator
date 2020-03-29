//Retrieved html elements
var opOne = document.getElementById("operand1");
var opTwo = document.getElementById("operand2");


//Result field
var result = document.getElementById("results");

//Button
var button = document.getElementById("button");



//When button is clicked
button.addEventListener("click", () => {
    //operators
    let operator = document.querySelector("#operator");

    if(operator.value ==="sub") {
            result.textContent = Number(opOne.value) - Number(opTwo.value);
                console.log("Subtraction works");
    }  else if(operator.value ==="add") {
            result.textContent = Number(opOne.value) + Number(opTwo.value);
                console.log("Additon works");
    }  else if(operator.value ==="mul") {
            result.textContent = Number(opOne.value) * Number(opTwo.value);
                console.log("Multiplication works")
    }   else if(operator.value ==="div") {
            result.textContent = Number(opOne.value) / Number(opTwo.value);
                console.log("Divison works")
    }
});

