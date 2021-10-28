function putItems(day, month, year) {
    localStorage.setItem('accesAmount', 1);
    localStorage.setItem(`${day}/${month + 1}/${year}`, localStorage.getItem('accesAmount'));
};

function accesAmount(day, month, year) {
    let visit = localStorage.getItem(`${day}/${month + 1}/${year}`);
    let addingVisitor = parseInt(visit) + 1;
    localStorage.setItem(`${day}/${month + 1}/${year}`, addingVisitor);
    insertingHtml(day, month, year);
};

function insertingHtml(day, month, year) {
    const html = '<p>The amount of visitors today is: <span id="visits-number"></span></p>';
    document.querySelector('#visitors-box').innerHTML = html;
    document.getElementById('visits-number').textContent = localStorage.getItem(`${day}/${month + 1}/${year}`);

};

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

if (!localStorage.getItem(`${day}/${month + 1}/${year}`)) {
    putItems(day, month, year);
} else {
    accesAmount(day, month, year);
};
