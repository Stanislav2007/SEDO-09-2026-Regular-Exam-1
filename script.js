
document.addEventListener("DOMContentLoaded", function () {
    const applyButton = document.getElementById("apply-btn");
    const randomButton = document.getElementById("randomColorBtn");
    const colorInput = document.getElementById("color-input");
    const colorBox = document.getElementById("box");

    if (!applyButton || !randomButton || !colorInput || !colorBox) {
        console.error("Homepage initialization failed: missing HTML elements.");
        return;
    }

    function applyColor(color) {
        colorBox.style.backgroundColor = color;
    }

    function generateRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
    }

    applyButton.addEventListener("click", function () {
        applyColor(colorInput.value);
    });

    randomButton.addEventListener("click", function () {
        applyColor(generateRandomColor());
    });
});
