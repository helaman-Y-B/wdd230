let date = new Date();

document.getElementById("currentYear").textContent = date.getFullYear();

let upDate = document.lastModified;

document.getElementById("update").textContent = `${upDate}`;