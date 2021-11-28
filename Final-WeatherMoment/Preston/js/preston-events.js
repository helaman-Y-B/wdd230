function input() {
    const apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
    getService(apiURL);
};

function getService(url) {
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
            placeData(data)
        });
};

function placeData(data) {
    let eventsParagraphs = document.querySelectorAll(".event");
    let events_list = data["towns"][6].events;

    events_list.forEach(event => {
        placeOutPut(event, eventsParagraphs);
    });
};

function placeOutPut(event, paragraphs) {
    paragraphs[index].textContent = `${event}`;
    index += 1;
};

let index = 0;
input();