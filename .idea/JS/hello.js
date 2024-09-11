let inp = document.querySelector(".inpColor");
console.log(inp);

let pbColor = document.querySelector(".pbSetColor");
console.log(pbColor);
pbColor.textContent = "Set Color";
let bdy = document.querySelector("body");
console.log(bdy);

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
}

pbColor.addEventListener("click", setBackgroundColor);

const inpColorPicker = document.getElementById("1");
inpColorPicker.addEventListener("input", function() {
    inp.value = inpColorPicker.value;
    console.log(inp.value);
});

const pTags = document.getElementsByTagName("p");
console.log(pTags);

const pArray = Array.from(pTags);

function changeFontSize(element, increment) {
    let fontSize = window.getComputedStyle(element).fontSize;
    let newSize = parseFloat(fontSize) + increment;
    element.style.fontSize = newSize + "px";
}

document.addEventListener("keyup", setBackgroundColor);

document.getElementById("increaseFontSize").addEventListener("click", function() {
    pArray.forEach(p => changeFontSize(p, 1));
});

document.getElementById("decreaseFontSize").addEventListener("click", function() {
    pArray.forEach(p => changeFontSize(p, -1));
});