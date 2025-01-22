const textColor = document.getElementById("color");
const btnColor = document.getElementById("btn-change");
let color = "";

function generateRandomColor() {
    let digits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","F"];
    for (const i of digits) {
        color += i;
    } 
    console.log(color);
}

btnColor.addEventListener("click", generateRandomColor);