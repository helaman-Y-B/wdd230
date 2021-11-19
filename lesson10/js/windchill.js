function getInput() {
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=da3a67b621a6f2f21a31a6932df16c19";
    getApi(apiURL);
    const foreApiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=508ff6423b7d3397f77fec0caef04f94";
    getApi(foreApiURL);
};

function getApi(url) {
    if (url === "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=da3a67b621a6f2f21a31a6932df16c19") {
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
    } else {
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
                showForeCastData(data)
            });
    };
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
    };

    //const img = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //const desc = data.weather[0].description;
    //document.getElementById("imagesrc").textContent = img;
    //document.getElementById("icon").setAttribute("src", img);
    //document.getElementById("icon").setAttribute("alt", desc);
};

function showForeCastData(data) {
    let fiveDaysForeCast = [];
    let temps = document.querySelectorAll(".temp-info");
    const list = data.list
    for (let i = 0; i < list.length; i++) {
        if (list[i].dt_txt.includes("18:00:00")) {
            fiveDaysForeCast.push(list[i]);

        };
    };

    fiveDaysForeCast.forEach(cast => {
        showOutPut(cast, temps)
    })
};

function showOutPut(cast, temps) {
    temps[indexNumber].textContent = `${cast.main.temp}°F`;
    indexNumber += 1;

    //temps.forEach(temp => {
    //    temp.textContent = `${cast.main.temp}°F`;
    //});
};

function windChillCalc(t, s) {

    let windChill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    windChill = Math.floor(windChill);
    document.querySelector("#wind-chill").textContent = windChill;
};

let indexNumber = 0;
let temp_list = [];
getInput();
