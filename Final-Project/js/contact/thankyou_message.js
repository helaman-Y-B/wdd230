function thanksHandler() {
    document.getElementsByClassName("div-elem")[0].classList.toggle("thanksMessage");
};

let div = document.getElementById("submit-button");

div.addEventListener("click", thanksHandler, false)