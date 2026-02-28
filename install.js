const deviceButtons = document.querySelectorAll(".device-btn");
const installBtn = document.querySelector(".install-btn");

let selectedDevice = null;

deviceButtons.forEach(button => {
    button.addEventListener("click", () => {

        deviceButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        selectedDevice = button.textContent;
    });
});

installBtn.addEventListener("click", () => {
    if (!selectedDevice) {
        alert("Please select a device first.");
        return;
    }

    alert(`Preparing installation for ${selectedDevice}...`);
});