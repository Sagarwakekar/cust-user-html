// cust-user.js

// Function to store form data when the submit button is clicked
function submitForm() {
    // Retrieve values from form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobNo = document.getElementById("mob-no").value;
    const dateOfBirth = document.getElementById("date").value;
    const address = document.getElementById("address").value;

    // You can now work with these values as needed
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Mobile Number: " + mobNo);
    console.log("Date of Birth: " + dateOfBirth);
    console.log("Address: " + address);

    // Perform any additional processing or validation here
}

// Function to reset the form when the reset button is clicked
function resetForm() {
    // Reset the input fields
    document.getElementById("name").value = "name";
    document.getElementById("email").value = "e-mail";
    document.getElementById("mob-no").value = "mob-no";
    document.getElementById("date").value = "date";
    document.getElementById("address").value = "address";

    // Reset other form elements as needed
}
