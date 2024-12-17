let countDownDate = new Date("Dec 23, 2024 00:00:00").getTime();
let h2Element = document.getElementById("h2-text");
let clockElement = document.querySelector(".clock");
let timerElements = document.querySelectorAll(".timer");
let daysElement = document.querySelector(".day");
let hoursElement = document.querySelector(".hours");
let minutesElement = document.querySelector(".minutes");
let secondsElement = document.querySelector(".seconds");
let footerElement = document.querySelector("footer");
let canvas = document.querySelector("#confetti")
let music = document.querySelector("#music");
let button = document.querySelector("button");
const jsConfetti = new JSConfetti();



let timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    if (distance <= 0) {
        clearInterval(timer);
        jsConfetti.addConfetti()


        h2Element.textContent = "HAPPY BIRTHDAY MY QUEEN!";

        let birthdayWishes = document.createElement("p");
        let birthdayButton = document.createElement("button");
        birthdayButton.textContent = "Surprise"
        birthdayButton.onclick = () => music.play()
        birthdayWishes.textContent = "Happy birthday my love";
        

        clockElement.style.display = "block"
        clockElement.append(birthdayWishes);
        clockElement.append(birthdayButton);
        timerElements.forEach((timer) => (timer.style.display = "none"))
        footerElement.style.display = "none";
    }
}, 1000);





