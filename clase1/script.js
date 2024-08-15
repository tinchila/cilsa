// Botones
const normalStyleBtn = document.getElementById("normalStyleBtn");
const highContrastBtn = document.getElementById("highContrastBtn");
const body = document.body;

// Evento para aplicar estilo normal
normalStyleBtn.addEventListener("click", () => {
    body.classList.remove("high-contrast");
});

// Evento para aplicar estilo de alto contraste
highContrastBtn.addEventListener("click", () => {
    body.classList.add("high-contrast");
});
