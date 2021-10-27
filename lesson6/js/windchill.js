function windChillCalc(t, s) {

    let windChill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    windChill = Math.floor(windChill);
    document.querySelector("#wind-chill").textContent = windChill;
};

const temp = parseInt(document.querySelector("#avg-temp").textContent);
const windSpeed = parseInt(document.querySelector("#wind-speed").textContent);

if (parseInt(temp) <= 50 && parseInt(windSpeed) >= 3) {
    windChillCalc(temp, windSpeed);
} else {
    document.querySelector("#wind-chill-text").remove("#wind-chill-text");
}