const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (form) {  
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        successMsg.textContent = "Thank you " + name + "! Message received.";
        form.reset();
    });
}
