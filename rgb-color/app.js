const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const redText = document.getElementById("red-text");
const greenText = document.getElementById("green-text");
const blueText = document.getElementById("blue-text");

let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;



redInput.addEventListener("change", () => {
    red = redInput.value;
    redText.innerText = red;
    document.body.style.backgroundColor = "rgb("+ red + ","+ green +","+ blue +")";
})
blueInput.addEventListener("change", () => {
    blue = blueInput.value;
    blueText.innerText = blue;
    document.body.style.backgroundColor = "rgb("+ red + ","+ green +","+ blue +")";
})
greenInput.addEventListener("change", () => {
    green = greenInput.value;
    greenText.innerText = green;
    document.body.style.backgroundColor = "rgb("+ red + ","+ green +","+ blue +")";
})