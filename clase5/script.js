// Botones
const normalStyleBtn = document.getElementById("normalStyleBtn");
const highContrastBtn = document.getElementById("highContrastBtn");
const body = document.body;

// Evento para aplicar modo normal
normalStyleBtn.addEventListener("click", () => {
    body.classList.remove("high-contrast");
});

// Evento para aplicar modo oscuro
highContrastBtn.addEventListener("click", () => {
    body.classList.add("high-contrast");
});
