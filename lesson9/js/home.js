function getApi(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                let jsonObject = response.json();
                return jsonObject
            } else {
                console.log("Response was not ok", response);
            };
        })
        .then((jsonObject) => {
            showData(jsonObject)
        });
};

function showData(jsonObject) {

    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {

        if (towns[i].name === "Preston") {

            let foundedYear = document.querySelector("#preston-year");
            let population = document.querySelector("#preston-population");
            let rainFall = document.querySelector("#preston-rain-fall")
            let img = document.createElement("img");

            foundedYear.textContent = ` ${towns[i].yearFounded}`;
            population.textContent = ` ${towns[i].currentPopulation}`;
            rainFall.textContent = ` ${towns[i].averageRainfall}`;
            img.setAttribute("src", `img/${towns[i].photo}`);

            document.querySelector("#preston").appendChild(img);

        } else if (towns[i].name === "Fish Haven") {

            let foundedYear = document.querySelector("#haven-year");
            let population = document.querySelector("#haven-population");
            let rainFall = document.querySelector("#haven-rain-fall")
            let img = document.createElement("img");

            foundedYear.textContent = ` ${towns[i].yearFounded}`;
            population.textContent = ` ${towns[i].currentPopulation}`;
            rainFall.textContent = ` ${towns[i].averageRainfall}`;
            img.setAttribute("src", `img/${towns[i].photo}`);

            document.querySelector("#fish-haven").appendChild(img);

        } else if (towns[i].name === "Soda Springs") {

            let foundedYear = document.querySelector("#soda-year");
            let population = document.querySelector("#soda-population");
            let rainFall = document.querySelector("#soda-rain-fall")
            let img = document.createElement("img");

            foundedYear.textContent = ` ${towns[i].yearFounded}`;
            population.textContent = ` ${towns[i].currentPopulation}`;
            rainFall.textContent = ` ${towns[i].averageRainfall}`;
            img.setAttribute("src", `img/${towns[i].photo}`);

            document.querySelector("#soda-sprigs").appendChild(img);

        } else {
            //pass
        };

    };
};


const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';

getApi(URL)