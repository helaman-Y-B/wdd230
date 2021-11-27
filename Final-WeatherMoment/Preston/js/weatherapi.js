function getInput() {
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=da3a67b621a6f2f21a31a6932df16c19";
    getApi(apiURL);
};

function getApi(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                return data
            }
            else {
                console.log("Response was not ok", response);
            };

        })
        .then((data) => {
            showData(data)
        });
};

function showData(data) {
    let temp = document.querySelector("#current-temp");
    temp.textContent = data.main.temp;

    const img = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    const desc = data.weather[0].description;
    document.getElementById("imagesrc").textContent = img;
    document.getElementById("icon").setAttribute("src", img);
    document.getElementById("icon").setAttribute("alt", desc);
}

getInput()