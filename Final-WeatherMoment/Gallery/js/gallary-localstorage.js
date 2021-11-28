function visit(){
    let lastVisit;
    if ("lastVisit" in localStorage) {
        lastVisit = JSON.parse(window.localStorage.getItem('lastvisit'));
        let lastVisitDate = new Date(lastVisit);
        calculateDays(lastVisitDate);
    } else {
        lastVisit = Date.now();
    };
};

function calculateDays(lastVisitDate){
    let numberOfDays;
    if (lastVisitDate !== 0) {
        numberOfDays = Math.round((today - lastVisitDate) / milisecondsToDays);
        showOutput(numberOfDays);
    } else {
        numberOfDays = 0;
    };
};

function showOutput(LastVisit) {
    document.getElementById("days").textContent = LastVisit;
    window.localStorage.setItem('lastvisit', JSON.stringify(today));
};

let today = new Date(Date.now());

const milisecondsToDays = 8640000;

visit();