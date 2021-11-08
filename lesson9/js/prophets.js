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
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let pForDate = document.createElement("p");
        let pForPlace = document.createElement("p");
        let img = document.createElement("img");

        h2.textContent = prophets[i].name + " " + prophets[i].lastname;
        pForDate.textContent = `Date of Birth: ${prophets[i].birthdate}`;
        pForPlace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
        img.setAttribute("src", prophets[i].imageurl);

        card.appendChild(h2);
        card.appendChild(pForDate);
        card.appendChild(pForPlace);
        card.appendChild(img);

        document.querySelector("div.cards").appendChild(card);
    };
};

const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

getApi(URL)