const input = document.getElementById("Input");

input.addEventListener("input", save);

window.addEventListener("DOMContentLoaded", call);

function save() {
    let inputText = input.value;
    localStorage.setItem("savedInput", inputText);
}

function call() {
    let storedInput = localStorage.getItem("savedInput");
    if (storedInput) {
        input.value = storedInput;
    }
}
