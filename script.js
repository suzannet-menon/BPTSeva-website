const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem("contactData", JSON.stringify(data));

    successMsg.textContent = "Message submitted successfully!";
    form.reset();
});

