function thisIsThePage (item){
    if (item === "Preston") {
        document.querySelector("#current-page").style.backgroundColor = "#165858";
        document.querySelector("#current-page").style.color = "white";
    }
    else {
        console.log("Something went wrong... look into the code.")
    };


};

let pageName = document.querySelector("#current-page").textContent;

thisIsThePage(pageName);