let yearSpan = document.getElementById('current-year');
console.log(yearSpan);
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
console.log(currentYear);
yearSpan.innerHTML = currentYear;