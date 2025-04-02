// Home Page - Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    slideIndex = n;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

// Portfolio Page - Functions
function temperatureConverter() {
    let choice = prompt("Enter 1 to convert Celsius to Fahrenheit, or 2 for Fahrenheit to Celsius:");
    if (choice === "1") {
        let celsius = prompt("Enter temperature in Celsius:");
        celsius = parseFloat(celsius);
        if (isNaN(celsius)) return alert("Please enter a valid number!");
        let fahrenheit = (celsius * 9/5) + 32;
        alert(celsius + "°C is " + fahrenheit.toFixed(2) + "°F");
    } else if (choice === "2") {
        let fahrenheit = prompt("Enter temperature in Fahrenheit:");
        fahrenheit = parseFloat(fahrenheit);
        if (isNaN(fahrenheit)) return alert("Please enter a valid number!");
        let celsius = (fahrenheit - 32) * 5/9;
        alert(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");
    } else {
        alert("Invalid choice! Please enter 1 or 2.");
    }
}

function getLongerWord() {
    let word1 = prompt("Enter a word:");
    let word2 = prompt("Enter another word:");
    if (!word1 || !word2) return alert("Please enter valid words!");
    let longerWord = word1.length > word2.length ? word1 :
                     word2.length > word1.length ? word2 :
                     "Both words are of equal length: " + word1 + " and " + word2;
    alert("The longer word is: " + longerWord);
}

function knowMyBirthstone() {
    let month = parseInt(prompt("Enter your birth month (1-12):"));
    const birthstones = ["Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl",
                        "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"];
    if (isNaN(month) || month < 1 || month > 12) {
        alert("Invalid month! Please enter a number between 1 and 12.");
    } else {
        alert("Your birthstone is: " + birthstones[month - 1]);
    }
}

function basicOperators() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num1) || isNaN(num2)) return alert("Please enter valid numbers!");
    let operation = prompt("Choose an operation: 1 for +, 2 for -, 3 for *, 4 for /");
    let result;
    switch (operation) {
        case "1": result = num1 + num2; alert(num1 + " + " + num2 + " = " + result.toFixed(2)); break;
        case "2": result = num1 - num2; alert(num1 + " - " + num2 + " = " + result.toFixed(2)); break;
        case "3": result = num1 * num2; alert(num1 + " * " + num2 + " = " + result.toFixed(2)); break;
        case "4": 
            if (num2 === 0) alert("Error: Division by zero!");
            else { result = num1 / num2; alert(num1 + " / " + num2 + " = " + result.toFixed(2)); }
            break;
        default: alert("Invalid operation!");
    }
}

function computeAcceleration() {
    let initial_velocity = parseFloat(prompt("Enter initial velocity (m/s):"));
    let final_velocity = parseFloat(prompt("Enter final velocity (m/s):"));
    let delta_time = parseFloat(prompt("Enter elapsed time (s):"));
    if (isNaN(initial_velocity) || isNaN(final_velocity) || isNaN(delta_time)) {
        alert("Please enter valid numbers!");
    } else if (delta_time === 0) {
        alert("Error: Time cannot be zero!");
    } else {
        let acceleration = (final_velocity - initial_velocity) / delta_time;
        alert("The acceleration is: " + acceleration.toFixed(2) + " m/s²");
    }
}

function scrollSlider(amount) {
    const slider = document.querySelector('.portfolio-slider');
    slider.scrollLeft += amount;
}

// Favorites Page - Functions
function toggleLike(element) {
    element.classList.toggle('liked');
}

function addComment(button, listId) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();
    if (commentText !== "") {
        let commentList = document.getElementById(listId);
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}