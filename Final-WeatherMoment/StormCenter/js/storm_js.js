function toggleMenu() {
    let text = document.getElementById("toggle-menu").textContent;
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");

    if (text === "Menu") {
        document.getElementById("toggle-menu").textContent = "X";
    }

    else {
        document.getElementById("toggle-menu").textContent = "Menu";
    }
};

function thisIsThePage(item) {
    if (item === "Storm Center") {
        document.querySelector("#current-page").style.backgroundColor = "#0f7fac";
        document.querySelector("#current-page").style.color = "white";
    }
    else {
        console.log("Something went wrong... look into the code.")
    };


};

let pageName = document.querySelector("#current-page").textContent;

thisIsThePage(pageName);

function showNumber(number) {
    document.querySelector("#severity-number").innerHTML = number;
};