
document.addEventListener("DOMContentLoaded", function () {
    const applyBtn = document.getElementById("apply-btn");
    const colorInput = document.getElementById("color-input");
    const box = document.getElementById("box");
    const randomColorBtn = document.getElementById("randomColorBtn");

    if (!applyBtn || !colorInput || !box || !randomColorBtn) {
        console.error("Homepage initialization failed: missing HTML elements.");
        return;
    }

    applyBtn.addEventListener("click", function () {
        box.style.backgroundColor = colorInput.value;
    });

    randomColorBtn.addEventListener("click", function () {
        const color = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

        box.style.backgroundColor = color;
    });
});
