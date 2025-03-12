document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    const form = document.getElementById("pizzaForm");
    const zipField = document.getElementById("zipcodeField");
    const usResidentCheckbox = document.getElementById("usResident");
    const zipInput = document.getElementById("zipcode");
    const successMessage = document.getElementById("successMessage");

    usResidentCheckbox.addEventListener("change", function () {
        console.log("Checkbox changed: ", this.checked);
        if (this.checked) {
            zipField.style.display = "block";
            zipInput.setAttribute("required", "true");
        } else {
            zipField.style.display = "none";
            zipInput.removeAttribute("required");
            document.getElementById("zipError").textContent = "";
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let valid = true;

        document.querySelectorAll(".error").forEach(e => e.textContent = "");
        const name = document.getElementById("name").value.trim();
        
        if (name.length < 3) {
            document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
            valid = false;
        }

        else if (/[\d]/.test(name)) {
            document.getElementById("nameError").textContent = "Name cannot contain numbers.";
            valid = false;
        }


    if (valid) {
        document.getElementById("successMessage").style.display = "block";
    }
});

        const birthYear = parseInt(document.getElementById("birthYear").value, 10);
        const currentYear = new Date().getFullYear();
        if (isNaN(birthYear) || birthYear < 1900 || birthYear >= currentYear) {
            document.getElementById("yearError").
            valid = false;
        }

        if (usResidentCheckbox.checked) {
            const zip = document.getElementById("zipcode").value.trim();
            if (!/^\d{5}$/.test(zip)) {
                document.getElementById("zipError")
            }
        }

        const password = document.getElementById("password").value;
        console.log("Password entered:", password); // Check entered password

        // Check password length and that it contains uppercase, lowercase, and digits
        if (password.length < 8) {
            document.getElementById("passwordError").
            valid = false;
        }

const pizzaForm = document.getElementById('pizzaForm');

pizzaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;
    const pizzaRadioButtons = document.querySelectorAll('input[name="pizza"]:checked');
    

    if (pizzaRadioButtons.length === 0) {
        document.getElementById('pizzaError').textContent = "You must select at least one pizza type.";
        valid = false;
    } else {
        document.getElementById('pizzaError').textContent = "";
    }
    
    
    if (valid) {
        document.getElementById('successMessage').style.display = 'block';
    }
});

        if (valid) {
            console.log("Form submitted successfully!");
            successMessage.style.display = "block";
            form.reset();
            zipField.style.display = "none";
        } else {
            successMessage.style.display = "none";
        }
    });
