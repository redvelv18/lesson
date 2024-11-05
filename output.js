// task oonnneeee

// console.log("Diego");

// const nameInput = document.getElementById("nameInput");
// console.log(nameInput.value);

//funkcija ar vienu parametru
// function printName(firstName) {
//   console.log(firstName);
// }
//funkcijas izsaukums ar vienu argumentu
//printName("Diego")

// const submitButton = document.getElementById("submitButton");
// submitButton.addEventListener("click", printName);

// submitButton.addEventListener("click", () => {
//     console.log(nameInput.value);
// });

// task chew

//console.log("testing");
//function validateNumbers() {
//const firstNumber = parseInt(document.getElementById("oneTH").value);
//const secondNumber = parseInt(document.getElementById("twoTH").value);
//}

//if (
//isNaN(firstNumber) ||
//isNaN(secondNumber) ||
// firstNumber < 1 ||
// secondNumber < 1
//) {
// alert("Both numbers must be natural numbers (greater than 0).");
//}

//if (firstNumber >= secondNumber) {
// alert("Nuh uh! First thang gotta b smaller");
//} else {
//alert("Good job fellas");
//}

//document
//.getElementById("checkButton")
//.addEventListener("click", validateNumbers);

function printNumbers(firstnumber, secondNumber) {
  for (let i = firstnumber; i < secondNumber; i++) {
    console.log(i);
  }
}
printNumbers(5, 8);
