const colArray2 = [["Red", "#ff0000"], ["Green","#00ff00"], ["Yellow", "#ffff00"], ["Purple", "#9f05ec"]];
const coloredObject = [
    {"name": "Red", "hex": "#ff0000"},
    {"name": "Green", "hex": "#00ff00"},
    {"name": "Yellow", "hex": "#ffff00"},
    {"name": "Purple", "hex": "#9f05ec"}
];

const ddColor2 = document.getElementById("ddColor2");
const pbFillDropdown2 = document.getElementById("pbFillDropdown2");
const bodyElement = document.querySelector("body");

function fillDropdown2(item) {
    const e = document.createElement("option");
    e.textContent = item[0];
    e.value = item[1];
    ddColor2.appendChild(e);
}

function fillDropdownObject(item) {
    const el = document.createElement("option");
    el.textContent = item.name;
    el.value = item.hex;
    ddColor2.appendChild(el);
}

function addColor2() {
    ddColor2.innerHTML = "";
    // colArray2.forEach(fillDropdown2);
    coloredObject.forEach(fillDropdownObject);
    console.log(document.all);
}

function setBackgroundColor2() {
    const selectIndex = ddColor2.selectedIndex;
    const selOptions = ddColor2.options[selectIndex];
    const selColor = selOptions.value;
    console.log(selColor);
    bodyElement.style.backgroundColor = selColor;
}

pbFillDropdown2.addEventListener("click", addColor2);
ddColor2.addEventListener("change", setBackgroundColor2);