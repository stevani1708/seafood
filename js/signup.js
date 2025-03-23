document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || email === "" || password === "") {
            alert("Harap isi semua bidang yang diperlukan.");
        } else {
            alert("Pendaftaran berhasil!");
        }
    });
});
