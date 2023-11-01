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

    // document.getElementById('form2').innerHTML = `
    //  <p>  1] NAME : ${name} </p>
    
    // `

    document.getElementById('form2').innerHTML = `

            <div>
            1] NAME <br> <input type="text"  value=${name}>
        </div>
        <div>
            2] E-MAIL <br> <input type="text" id="email" value=${email}>
        </div>
        <div>
            3] MOB.NO <br> <input type="number" id="mob-no" value=${mobNo}>
        </div>
        <div>
            4] D.O.B <br> <input type="date" id="date" value=${dateOfBirth}>
        </div>
        <div>
            5] ADDRESS <br> <input type="text" id="address" value=${address}>
        </div>
           
        `



    

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
