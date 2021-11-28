function toggleMenu() {
    let text = document.getElementById("toggle-menu").textContent;
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");

    if (text === "Menu") {
        document.getElementById("toggle-menu").textContent = "X";
    }

    else {
        document.getElementById("toggle-menu").textContent = "Menu";
    }
};

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