const submitButton = document.getElementById("submit-btn");
const timer = document.querySelector(".timer");
let index = 0;
let timeRemaining = 60;

submitButton.addEventListener("click", timeKeeper);

// Function for Timer (For Future use)
function timeKeeper() {
    // interval = setInterval(function () {
    //     timeRemaining--;
    //     timer.innerHTML = "Time remaining : " + timeRemaining;
    //     if (timeRemaining <= 0 || index >= 5) {
    //         clearInterval(interval);
    //         bidOver();
    //     }

    // }, 1000)
};

// when user submits their bid amount
$("#submit-btn").click(function () {
    $(".current-bid").val("");
    $('.current-bid').text($(".form-control").val());
    // $(".current-bid").text($("<p>Your Offer: " + ".form-control" + "</p>"));
    alert('Your bid was submitted!');
});