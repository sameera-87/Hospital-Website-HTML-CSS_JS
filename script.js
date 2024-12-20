let menubar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//front end validation functions

// checking the user inputs
function validateEnquiryForm(event) {
    // holding data untill the validation is done
    event.preventDefault();

    // getting all the elemnts from html form
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const details = document.getElementById("details").value.trim();

    //handling erro mesages
    let errors = [];

    //validating the name
    if (!name) {
        errors.push("Full name is required!");
    } else if (name.length < 3) {
        errors.push("Name should be more than 3 charactors!");
    }

    //validating the age
    if (!age) {
        errors.push("Enter your age!");
    } else if (isNaN(age) || age <= 0 || age > 120) {
        errors.push("Enter a valid age!");
    }

    //validating contact number
    if (!phone) {
        errors.push("Please enter your phone number!");
    } else if (!/^\d{10}$/.test(phone)) {
        errors.push("Please enter a valid telephone number! (telephone number should required 10 digits)");
    }

    //validating email
    if (!email) {
        errors.push("Please enter your email!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Please provde an valid email address!");
    }

    //validating subject
    if (!subject) {
        errors.push("Please provide a subject.");
    } else if (subject.length < 3) {
        errors.push("Subject should be more than 3 characters long!");
    }

    //validating details
    if (!details) {
        errors.push("Please provide enquiry details");
    } else if (details.length < 10) {
        errors.push("Message/Inquiry details should be at least 10 characters long.");
    }

    //diplaying the array of errors or the submission completion
    if (errors.length > 0) {
        alert("Please check these error:\n\n" + errors.join("\n"));
    } else {
        alert("Your form has been successfully submitted. Thank you!");
        document.querySelector("form").submit();
    }
}

//attach the validation to the event
document.querySelector("form").addEventListener("submit", validateEnquiryForm);

