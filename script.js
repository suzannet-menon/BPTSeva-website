const form = document.getElementById("messageForm");
const successMsg = document.getElementById("successMsg");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        successMsg.textContent = "Thank you " + name + "! Message received. We will get back to you within 24-48 hours.";  
        successMsg.style.marginTop = "15px";   /* pushes it below the button */
        form.reset();
    });
}
