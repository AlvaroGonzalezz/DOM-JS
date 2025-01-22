const textColor = document.getElementById("color");
const btnColor = document.getElementById("btn-change");
const body = document.querySelector("body");

function generateRandomColor() {
    // let digits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","F"];
    let digits = "012345679ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * 15);
        color += digits[index];       
    }
    return color;
}

btnColor.addEventListener("click", () => {
    textColor.innerText = generateRandomColor();
    body.style.backgroundColor = generateRandomColor();
});