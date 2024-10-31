
let countDownDate = new Date("Dec 23, 2024 00:00:00").getTime();
let daysElement = document.querySelector(".day");
let hoursElement = document.querySelector(".hours");
let minutesElement = document.querySelector(".minutes");
let secondsElement = document.querySelector(".seconds");

let counter = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    if (distance < 0) {
        clearInterval(x);
        daysElement.textContent = 0;
        hoursElement.textContent = 0;
        minutesElement.textContent = 0;
        secondsElement.textContent = 0;
    };
}, 1000);