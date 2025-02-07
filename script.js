let countDownDate = new Date("Dec 23, 2025 00:00:00").getTime();
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
const happyBirthdayEpistle = 'You are the best gift I have received this year and I`m grateful to God for that. I like to think that you are a gift because for me, our meeting under that tree was divinely orchestrated. The universe`s way of say "You two should be together". I`ve gone from not wanting a relationship, to being completely swept off my feet like a princess, by you and I cannot imagine my life  without you in it anymore. Thank you for being a blessing to me, for being yourself, for caring deeply about me, for supporting me, for having my back and for taking care of me (add winking emoji). I appriciate you so much. Although, we have had our share of ups and downs, I appreciate the fact that you`ve stood by me through it all. I appreciate your forgiveness and the fact that you offered your heart to me a second time. You have no idea how grateful I am for that baby. Thank you so much!'



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
        let love = document.createElement("p");
        let birthdayButton = document.createElement("button");
        birthdayButton.textContent = "Click Me!!"
        birthdayButton.onclick = () => music.play()
        birthdayWishes.textContent = happyBirthdayEpistle;
        love.textContent =  "I love you, Monisola. Happy Birthday Babyy!!"
        

        clockElement.style.display = "block"
        clockElement.append(birthdayWishes);
        clockElement.append(love)
        clockElement.append(birthdayButton);
        timerElements.forEach((timer) => (timer.style.display = "none"))
        footerElement.style.display = "none";
    }
}, 1000);





