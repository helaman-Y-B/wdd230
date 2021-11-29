function visit() {
    let lastVisit;
    if ("lastVisit" in localStorage) {
        lastVisit = JSON.parse(window.localStorage.getItem('lastvisit'));
        let lastVisitDate = new Date(lastVisit);
        calculateDays(lastVisitDate);
    } else {
        lastVisit = Date.now();
        let lastVisitDate = new Date(lastVisit);
        calculateDays(lastVisitDate);
    };
};

function calculateDays(lastVisitDate) {
    let numberOfDays;
    if (lastVisitDate !== 0) {
        numberOfDays = Math.round((today - lastVisitDate) / milisecondsToDays);
        showOutput(numberOfDays, today);
    } else {
        numberOfDays = 0;
    };
};

function showOutput(LastVisit, today) {
    document.getElementById("days").textContent = LastVisit;
    window.localStorage.setItem('lastvisit', JSON.stringify(today));
};

const milisecondsToDays = 8640000;
let today = new Date(Date.now());

visit();