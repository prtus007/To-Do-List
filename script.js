function adding() {
    const str = document.getElementById("Enter").value;
    adder(str);
}
addEventListener("keypress", function adding(event) {
    if (event.key == "Enter") {
        const str = document.getElementById("Enter").value;
        adder(str);
    }
})
addEventListener("keydown", function removing(event) {
    if (event.key == "Delete") {
        const str = document.querySelector(".obj");
        str.removeChild(str.firstElementChild);
    }
})
function adder(text) {
        const para = document.createElement("li")
        para.innerText = text;
        document.querySelector(".obj").appendChild(para);
}
function removing(task) {
    const str = document.querySelector(".obj");
    str.removeChild(str.firstElementChild);
}


