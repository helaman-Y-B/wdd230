function getJson(jsonData) {
    gettingContent(jsonData);
};

function gettingContent(data) {
    let compNames = document.querySelectorAll(".name");
    let compDescriptions = document.querySelectorAll(".description");
    let webPages = document.querySelectorAll(".webpage");
    let webLinks = document.querySelectorAll(".webpage-link");
    let logos = document.querySelectorAll(".logo");

    compNames.forEach(name => {
        if (indexNum === 0) {
            name.textContent = data.companies.arnaldos.name;
            webLinks[indexNum].setAttribute("href", data.companies.arnaldos.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.arnaldos.description;
            webPages[indexNum].textContent = data.companies.arnaldos.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.arnaldos.logo);
            indexNum += 1
        }

        else if (indexNum === 1) {
            name.textContent = data.companies.superMuffato.name;
            webLinks[indexNum].setAttribute("href", data.companies.superMuffato.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.superMuffato.description;
            webPages[indexNum].textContent = data.companies.superMuffato.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.superMuffato.logo);
            indexNum += 1
        }

        else if (indexNum === 2) {
            name.textContent = data.companies.farmaciaDrogaMais.name;
            webLinks[indexNum].setAttribute("href", data.companies.farmaciaDrogaMais.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.farmaciaDrogaMais.description;
            webPages[indexNum].textContent = data.companies.farmaciaDrogaMais.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.farmaciaDrogaMais.logo);
            indexNum += 1
        }

        else if (indexNum === 3) {
            name.textContent = data.companies.camelodramo.name;
            webLinks[indexNum].setAttribute("href", data.companies.camelodramo.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.camelodramo.description;
            webPages[indexNum].textContent = data.companies.camelodramo.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.camelodramo.logo);
            indexNum += 1
        }

        else if (indexNum === 4) {
            name.textContent = data.companies.leroyMerlin.name;
            webLinks[indexNum].setAttribute("href", data.companies.leroyMerlin.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.leroyMerlin.description;
            webPages[indexNum].textContent = data.companies.leroyMerlin.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.leroyMerlin.logo);
            indexNum += 1
        }

        else if (indexNum === 5) {
            name.textContent = data.companies.shoppingCatuai.name;
            webLinks[indexNum].setAttribute("href", data.companies.shoppingCatuai.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.shoppingCatuai.description;
            webPages[indexNum].textContent = data.companies.shoppingCatuai.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.shoppingCatuai.logo);
            indexNum += 1
        }

        else if (indexNum === 6) {
            name.textContent = data.companies.mcDonalds.name;
            webLinks[indexNum].setAttribute("href", data.companies.mcDonalds.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.mcDonalds.description;
            webPages[indexNum].textContent = data.companies.mcDonalds.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.mcDonalds.logo);
            indexNum += 1
        }

        else if (indexNum === 7) {
            name.textContent = data.companies.theBestAçai.name;
            webLinks[indexNum].setAttribute("href", data.companies.theBestAçai.webPage);
            compDescriptions[indexNum].innerHTML = data.companies.theBestAçai.description;
            webPages[indexNum].textContent = data.companies.theBestAçai.webPage;
            logos[indexNum].setAttribute("data-src", data.companies.theBestAçai.logo);
        }
    });

};

function changeLayoutToFlex() {
    document.getElementsByClassName("main-section")[0].classList.add("responsive-main");
    let busisness = document.querySelectorAll(".busisness");
    for (let i = 0; i < busisness.length; i++) {
        document.getElementsByClassName("busisness")[i].classList.add("responsive-busisness");
    };

};

function changeLayoutToGrid() {
    document.getElementsByClassName("main-section")[0].classList.remove("responsive-main");
    let busisness = document.querySelectorAll(".busisness");
    for (let i = 0; i < busisness.length; i++) {
        document.getElementsByClassName("busisness")[i].classList.remove("responsive-busisness");
    };
};

let jsonData = {
    "companies": {
        "arnaldos": {
            "name": "Arnaldos",
            "webPage": "http://www.arnaldos.com.br/",
            "description": "Arnaldos is in Londrina for more then twenty years selling delicious hot dogs, fries and hamburgers. <br /><br /> They are a very good example of an sucessful busisness and they recently started expanding their busisness to other cities around Londrina. <br /><br /> If you want to visit Londrina, you must go to Arnaldos!",
            "logo": "img/direct/arnaldos_logo.JPG"
        },
        "superMuffato": {
            "name": "Super Muffato",
            "webPage": "https://www.supermuffato.com.br/",
            "description": "Super Muffato is a company of hypermarkets in Paraná, and it's an very famous one. <br /><br /> Super Muffato didn't started in Londrina, but when they created a Super Muffato in Londrina, it rapidly started to gain profit. <br /><br /> Also the Super Muffato in Londrina, was the first to have an automated teller!",
            "logo": "img/direct/super_muffato_logo.JPG"
        },
        "farmaciaDrogaMais": {
            "name": "Farmácia Drogamais",
            "webPage": "https://drogamais.com.br/",
            "description": "Farmácia Drogamais is a drugstore in Londrina, and it has multiple stores around Londrina. <br /><br /> The drugstore also started in Londrina in 1993 and today has more then 200 units in all Paraná! <br /><br /> The drugstore stays opened 24/7 and is always ready for any emergency that may happen during the day and the night.",
            "logo": "img/direct/drogamais_logo.JPG"
        },
        "camelodramo": {
            "name": "Camelodramo",
            "webPage": "https://www.camelodromodelondrina.com.br/",
            "description": "Camelodramo is actually a place filled with a big variety of different shops, and is located in the center of Londrina. It's owner rent a space inside it, and then a new small shop is opened there. <br /><br /> Because it's in the center of Londrina, a lot of people go there every day, and you can find almost everything there, from food, to shoes, to glasses, and many other things!",
            "logo": "img/direct/camelodramo_logo.jpg"
        },
        "leroyMerlin": {
            "name": "Leroy Merlin",
            "webPage": "https://www.leroymerlin.com.br/",
            "description": "Leroy Merlin also came to Londrina with their big variety of products for many different things, places, and even situations. <br /><br /> Everything that you need for your house, you will be able to find most of it in Leroy Merlin, with the best quality as well!",
            "logo": "img/direct/leray_merlin_logo.jpg"
        },
        "shoppingCatuai": {
            "name": "Shopping Catuai",
            "webPage": "https://www.catuailondrina.com.br/",
            "description": "Shopping Catuai is the oldest Shopping in Londrina and also the first to bring outside famous fast food, like McDonalds, burger King, and also the most recent KFC! <br /><br /> The shopping is very beautiful and attracts a lot of different business, so what are you waiting for, let's go shopping!!",
            "logo": "img/direct/catuai_logo.jpg"
        },
        "mcDonalds": {
            "name": "McDonalds",
            "webPage": "https://www.mcdonalds.com.br/",
            "description": "McDonalds first came to Londrina in the Catuai Shopping, and since that day, McDonalds had continuously grow in Londrina, and today you can find an McDonald in every corner of the city.",
            "logo": "img/direct/mcdonalds_logo.jpg"
        },
        "theBestAçai": {
            "name": "The Best Açaí",
            "webPage": "https://www.amabest.net/",
            "description": "Açaí it's a fruit that grows on Amazônia, and here in Londrina we like to eat the Ice Cream version of it, and The Best Açaí do it just right! <br /><br /> They sell a lot of different mixtures of Açaí with a big variety of toppings. They also sell different Ice Creams, but why not taste 'The Best Açaí' instead?",
            "logo": "img/direct/the_best_logo.jpg"
        }

    }
}

let indexNum = 0

getJson(jsonData);