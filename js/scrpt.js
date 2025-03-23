document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form"); // Form login
    const errorMessage = document.getElementById("error-message"); // Pesan error

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        
        // Ambil nilai input
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Contoh data akun yang valid (simulasi database)
        const validUser = {
            username: "user123",
            password: "password123"
        };

        // Cek apakah username dan password sesuai
        if (username === validUser.username && password === validUser.password) {
            errorMessage.style.display = "none"; // Sembunyikan error
            alert("Login berhasil!"); // Notifikasi sukses
            window.location.href = "home.html"; // Redirect ke halaman Home
        } else {
            errorMessage.style.display = "block"; // Tampilkan error
            errorMessage.textContent = "⚠️ Username atau password salah!";
        }
    });
});
