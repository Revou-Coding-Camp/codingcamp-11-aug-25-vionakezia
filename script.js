// GREETING USER
const greetingDiv = document.getElementById('greeting');

function askName() {
    let storedName = localStorage.getItem('userName');
    if (!storedName) {
        // Minta nama user pertama kali
        let name = prompt("Halo! Siapa namamu?");
        if (name) {
            localStorage.setItem('userName', name);
            storedName = name;
        }
    }
    if (storedName) {
        greetingDiv.textContent = `Hai, ${storedName}! Selamat datang di Ayam Kampoes 🐔`;
    }
}

// Panggil fungsi saat halaman load
window.onload = askName;

const form = document.getElementById('formMessages');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const tanggalInput = document.getElementById('tanggal');
const pesanInput = document.getElementById('pesan');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const namaValue = namaInput.value.trim();
    const emailValue = emailInput.value.trim();
    const tanggalValue = tanggalInput.value;
    const pesanValue = pesanInput.value.trim();
    const genderValue = document.querySelector('input[name="gender"]:checked');

    // Regex untuk validasi nama dan email
    const namaRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namaRegex.test(namaValue)) {
        errorMsg.textContent = "Nama hanya boleh huruf!";
        return;
    }

    if (!emailRegex.test(emailValue)) {
        errorMsg.textContent = "Email tidak valid!";
        return;
    }

    if (!genderValue) {
        errorMsg.textContent = "Silakan pilih jenis kelamin!";
        return;
    }

    errorMsg.textContent = "";

    // Tampilkan pop-up dengan isi pesan
    alert(`Pesan Anda telah diterima!\n\nNama: ${namaValue}\nEmail: ${emailValue}\nTanggal Lahir: ${tanggalValue}\nJenis Kelamin: ${genderValue.value}\nPesan: ${pesanValue}`);

    // Reset form
    form.reset();
});