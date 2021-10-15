const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

let chapterList = []

button.addEventListener("click", function(){
  if (input === " "){
    console.log("There is no value");
    
  }
  else{
    let chapter = input.value;

    let item = document.createElement("li");
    let deletButton = document.createElement("button");

    item.innerHTML = `<p>${chapter}</p>`;
    deletButton.textContent = "X";
  

    list.appendChild(item);
    item.appendChild(deletButton);
  }
})
