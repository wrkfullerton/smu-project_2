const submitButton = document.getElementById("submit-btn");
const timer = document.querySelector(".timer");
let index = 0;
let timeRemaining = 60;

submitButton.addEventListener("click", timeKeeper);

// Function for Timer
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

// Text for Shoe Details
// $.get("/api", function (data) {
//     for (var i = 0; i < data.length; i++) {

//         var wellSection = $("<div>");
//         wellSection.addClass("well");
//         wellSection.attr("id", "shoe-wll-" + i);
//         $("well-section").append(wellSection);

//         $("#shoe-well-" + i).append("<h2>Brand: " + data[i].brand + "</h2>");
//         $("#shoe-well-" + i).append("<h3>Name: " + data[i].name + "</h3>");
//         $("#shoe-well-" + i).append("<h4>Size: " + data[i].size + "</h4>");
//         $("#shoe-well-" + i).append("<h4>Color: " + data[i].color + "</h4>");

//     };
// });

// when user submits their bid amount
$("#submit-btn").click(function () {
    $('.current-bid').append($(".form-control").val());
    alert('Your bid was submitted!');
});