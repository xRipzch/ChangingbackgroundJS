const colArray = ["red", "green", "blue", "yellow", "black", "white", "purple", "orange", "pink", "brown"];

const ddColor = document.getElementById("ddColor");
const pbFillDropdown = document.getElementById("pbFillDropdown");

const bdy = document.querySelector("body");
console.log(bdy);

function fillDropdown(item) {
    const el = document.createElement("option");
    el.textContent = item;
    el.value = item;
    ddColor.appendChild(el);
}

function addColor() {
    ddColor.innerHTML = "";
    colArray.forEach(fillDropdown);
    console.log(document.all);
}

function setBackgroundColor() {
    const selectIndex = ddColor.selectedIndex;
    const selOptions = ddColor.options[selectIndex];
    const selColor = selOptions.value;
    console.log(selColor);
    bdy.style.backgroundColor = selColor;
}

pbFillDropdown.addEventListener("click", addColor);
ddColor.addEventListener("change", setBackgroundColor);