let btnNext = document.getElementById("btn-next");
let reference = document.getElementById("reference");
let author = document.getElementById("author");

function genetareIntNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function changeReference() {
    let indexRandom = genetareIntNumber(0, references.length);
    reference.innerText = references[indexRandom].text;
    author.innerText = references[indexRandom].author;
}


btnNext.addEventListener("click", changeReference);