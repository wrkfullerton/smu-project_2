const submitButton = document.getElementById("submit-btn");
const timer = document.querySelector(".timer");
let index = 0;
let timeRemaining = 60;

submitButton.addEventListener("click", timeKeeper);

// function for Timer
function timeKeeper() {
    interval = setInterval(function () {
        timeRemaining--;
        timer.innerHTML = "Time remaining : " + timeRemaining;
        if (timeRemaining <= 0 || index >= 5) {
            clearInterval(interval);
            bidOver();
        }

    }, 1000)
};
