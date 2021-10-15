const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

let chapterList = []

button.addEventListener("click", function () {

  let chapter = input.value;

  if (chapter === "") {
    console.log("There is no value");

  }
  else {

    let item = document.createElement("li");
    let deletButton = document.createElement("button");

    item.innerHTML = `<p>${chapter}</p>`;
    deletButton.textContent = "X";


    list.appendChild(item);
    item.appendChild(deletButton);

    deletButton.addEventListener("click", function () {
      item.remove();
      input.focus();
    })
    input.value = "";
    input.focus();
  }
})

