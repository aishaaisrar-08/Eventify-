// =========================
// WELCOME MESSAGE
// =========================

function showMessage() {
    alert("Welcome to Eventify! 🎉 Let's plan your perfect event.");
}


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("show");

}


// =========================
// EVENT PLANNER
// =========================

document.getElementById("eventForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const location = document.getElementById("eventLocation").value;
    const guests = document.getElementById("guests").value;

    document.getElementById("eventResult").innerHTML =
        "🎉 Your event has been created!<br>" +
        "Event: " + name + "<br>" +
        "Date: " + date + "<br>" +
        "Location: " + location + "<br>" +
        "Guests: " + guests;

});


// =========================
// BUDGET CALCULATOR
// =========================

document.getElementById("budgetForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const venue = Number(document.getElementById("venue").value);
    const food = Number(document.getElementById("food").value);
    const decoration = Number(document.getElementById("decoration").value);
    const other = Number(document.getElementById("other").value);

    const total = venue + food + decoration + other;

    document.getElementById("budgetResult").textContent =
        "💰 Your Estimated Total Budget: Rs. " + total;

});


// =========================
// EVENT CHECKLIST
// =========================

function addTask() {

    const taskInput = document.getElementById("taskInput");

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

}


// =========================
// EVENT SEARCH
// =========================

function searchEvents() {

    const searchText = document
        .getElementById("eventSearch")
        .value
        .toLowerCase();

    const events = document.querySelectorAll(
        "#events .event-card"
    );

    let found = false;

    events.forEach(function(eventCard) {

        const eventName = eventCard
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (eventName.includes(searchText)) {

            eventCard.style.display = "block";

            found = true;

        } else {

            eventCard.style.display = "none";

        }

    });

    document.getElementById("noEvents").style.display =
        found ? "none" : "block";

}


// =========================
// EVENT CATEGORY FILTER
// =========================

function filterEvents(category) {

    const events = document.querySelectorAll(
        "#events .event-card"
    );

    events.forEach(function(eventCard) {

        const eventCategory =
            eventCard.getAttribute("data-category");

        if (
            category === "all" ||
            eventCategory === category
        ) {

            eventCard.style.display = "block";

        } else {

            eventCard.style.display = "none";

        }

    });

    document.getElementById("noEvents").style.display = "none";

}


// =========================
// CONTACT FORM
// =========================

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("userName").value;

    document.getElementById("contactResult").textContent =
        "Thank you, " + name + "! Your message has been received. 💜";

    document.getElementById("contactForm").reset();

});


// =========================
// EVENT REGISTRATION
// =========================

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("regName").value;

    const selectedEvent =
        document.getElementById("regEvent").value;

    document.getElementById("registrationResult").innerHTML =
        "🎉 Registration Successful!<br>" +
        "Thank you, " + name + "!<br>" +
        "You are registered for the " +
        selectedEvent + ".";

    document.getElementById("registrationForm").reset();

});


// =========================
// COUNTDOWN TIMER
// =========================

const eventDate =
    new Date("December 31, 2026 23:59:59").getTime();

const countdown = setInterval(function() {

    const now = new Date().getTime();

    const difference = eventDate - now;

    if (difference <= 0) {

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
            "🎉 The event has started!";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}, 1000);


// =========================
// DARK MODE
// =========================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const button =
        document.getElementById("darkModeButton");

    if (document.body.classList.contains("dark-mode")) {

        button.textContent = "☀️ Light Mode";

    } else {

        button.textContent = "🌙 Dark Mode";

    }

}


// =========================
// FEATURED EVENT DETAILS
// =========================

function showEventDetails(eventName) {

    alert(
        "🎉 " + eventName +
        "\n\nFor more information, please register for this event or contact Eventify."
    );

}
