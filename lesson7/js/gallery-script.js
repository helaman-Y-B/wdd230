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