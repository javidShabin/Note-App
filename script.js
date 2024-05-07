const notesContainer = document.querySelector(".notes-container");
const notesBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

notesBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png"
    notesContainer.appendChild(inputBox,img);
})