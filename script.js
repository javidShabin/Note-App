const notesContainer = document.querySelector(".notes-container");
const notesBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

notesBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(event){
    if (event.target.tagName === "IMG") {
        let item = event.target.parentElement;
        item.remove();
    }
})
