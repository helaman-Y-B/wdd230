function getInput() {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Londrina,BR&units=imperial&appid=0327868391c97cdf99a11d497a5a830f";
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
    let currently = document.querySelector("#currently");
    let temp = document.querySelector("#avg-temp");
    let humidity = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind-speed");
    currently.textContent = data.weather[0].description;
    temp.textContent = data.main.temp;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = data.wind.speed;


    if (parseInt(data.main.temp) <= 50 && parseInt(data.wind.speed) >= 3) {
        windChillCalc(data.main.temp, data.wind.speed);
    } else {
        document.querySelector("#wind-chill-text").remove("#wind-chill-text");
    };
};

function windChillCalc(t, s) {

    let windChill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    windChill = Math.floor(windChill);
    document.querySelector("#wind-chill").textContent = windChill;
};

let indexNumber = 0;
let temp_list = [];
getInput();


function date() {
    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    const currentDate = new Date();
    const day = currentDate.getDay();
    const numberDay = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const monthString = months[month];
    const dayString = weekDays[day];


    document.querySelector("#current-date").textContent = `${dayString}, ${numberDay} ${monthString} ${year}`;

};

date();