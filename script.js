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
    if (text.length!=0) {
        const para = document.createElement("li")
        para.innerText = text;
        para.style.display = "flex"
        para.style.justifyContent = "space-between";
        para.style.alignItems = "center";
        document.querySelector(".obj").appendChild(para);
        para.textContent=document.getElementById('Enter').value;
        document.getElementById('Enter').value="";
        deleting(para);
    }
}
function removing(task) {
    const str = document.querySelector(".obj");
    str.removeChild(str.firstElementChild);
}
function deleting(para) {
      const delbtn = document.createElement('button');
      delbtn.textContent = "REM";
      delbtn.style.height="20px"
      delbtn.style.width="40px"
      delbtn.style.border="0px"
      delbtn.style.borderRadius="5px"
      delbtn.style.backgroundColor="yellow"
      para.appendChild(delbtn);
      delbtn.addEventListener("click",function() {
          para.remove();
      });
      delbtn.addEventListener("mouseover",function () {
        delbtn.style.backgroundColor="#d86c6c"
      })
      delbtn.addEventListener("mouseout",function () {
        delbtn.style.backgroundColor="yellow";
      })
}

