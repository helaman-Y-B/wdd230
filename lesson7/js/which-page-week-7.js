function thisIsThePage(item) {
    if (item === "Gallery") {
        document.querySelector("#current-page").style.backgroundColor = "#0f7fac";
        document.querySelector("#current-page").style.color = "white";
    }
    else {
        console.log("Something went wrong... look into the code.")
    };


};

let pageName = document.querySelector("#current-page").textContent;

thisIsThePage(pageName);