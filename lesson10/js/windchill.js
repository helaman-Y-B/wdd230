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
    let temp = document.querySelector("#avg-temp");
    let humidity = document.querySelector("#humidity")
    let windSpeed = document.querySelector("#wind-speed")
    temp.textContent = data.main.temp;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = data.wind.speed;


    if (parseInt(data.main.temp) <= 50 && parseInt(data.wind.speed) >= 3) {
        windChillCalc(data.main.temp, data.wind.speed);
    } else {
        document.querySelector("#wind-chill-text").remove("#wind-chill-text");
    }

    //const img = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //const desc = data.weather[0].description;
    //document.getElementById("imagesrc").textContent = img;
    //document.getElementById("icon").setAttribute("src", img);
    //document.getElementById("icon").setAttribute("alt", desc);
}

function windChillCalc(t, s) {

    let windChill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    windChill = Math.floor(windChill);
    document.querySelector("#wind-chill").textContent = windChill;
};

getInput()
