let menubar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//front end validation functions

// Select the form element
const form = document.querySelector('form');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
// Prevent form submission for validation
event.preventDefault();

// Get form field values
const name = document.querySelector('input[placeholder="your name"]').value.trim();
const age = document.querySelector('input[placeholder="your age"]').value.trim();
const number = document.querySelector('input[placeholder="your number"]').value.trim();
const email = document.querySelector('input[placeholder="your email"]').value.trim();
const date = document.querySelector('input[type="date"]').value.trim();

// Validation flags
let isValid = true;

// Name validation
if (name === "") {
    alert("Please enter your name.");
    isValid = false;
}

// Age validation (Must be a number and between 0 and 120)
if (isNaN(age) || age < 0 || age > 120) {
    alert("Please enter a valid age between 0 and 120.");
    isValid = false;
}

// Phone number validation (Must be a 10-digit number)
if (!/^\d{10}$/.test(number)) {
    alert("Please enter a valid 10-digit phone number.");
    isValid = false; 
}

 // Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
}

// Date validation (Ensure a date is selected)
if (date === "") {
    alert("Please select a date for the appointment.");
    isValid = false;
}

// If all validations pass, allow form submission
if (isValid) {
    alert("Form submitted successfully!");
    form.submit(); // Submit the form
}
});
