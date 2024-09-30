// Första kodraden innebär att när Document Object Model har laddats, alltså att htmlen har laddats, så ska en function köras.
document.addEventListener("DOMContentLoaded", function inputValidering() {
    const nameInput = document.getElementById("user-name");
    const telInput = document.getElementById("user-tel");
    const emailInput = document.getElementById("user-e");
    const messageInput = document.getElementById("user-message");

    // Validering av namn input-objektet
    nameInput.addEventListener("input", function() {
        const namePattern = /^[a-zA-Z]+$/; 
      
        nameInput.classList.remove("valid", "invalid");
        
        if (nameInput.value.trim() === "" || !namePattern.test(nameInput.value)) { 
            nameInput.classList.add("invalid");   // Detta lägger till classen "invalid" till elementet så att det stylas 
        } else {
            nameInput.classList.add("valid");     // Detta lägger till classen "valid" till elementet så att det stylas
        }
    });

    // Validering av telefon input-objektet
    telInput.addEventListener("input", function() {
        const phonePattern = /^07\d{1,2}[- ]?\d{6,7}$/; // Endast siffror
 
        telInput.classList.remove("valid", "invalid");
        
        if (telInput.value.trim() === "" || !phonePattern.test(telInput.value)) {
            telInput.classList.add("invalid"); 
        } else {
            telInput.classList.add("valid");
        }
    });

    // Validering av email input-objektet
    emailInput.addEventListener("input", function() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        emailInput.classList.remove("valid", "invalid");
        
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
            emailInput.classList.add("invalid"); 
        } else {
            emailInput.classList.add("valid");
        }
    });

    // Validering av meddelande input-objektet
    messageInput.addEventListener("input", function() {
        messageInput.classList.remove("valid", "invalid");
        
        if (messageInput.value.trim() === "") {
            messageInput.classList.add("invalid");
        } else {
            messageInput.classList.add("valid"); 
        }
    });
});
