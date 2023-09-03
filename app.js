const box = document.querySelector(".box");

let currentPosition = 0; // Variável de controle para alternar entre as quatro posições

box.addEventListener("click", () => {
    switch (currentPosition) {
        case 0:
            box.style.top = "0";
            box.style.left = `${800 - 50}px`;
            break;
        case 1:
            box.style.top = `${800 - 50}px`;
            box.style.left = `${800 - 50}px`;
            break;
        case 2:
            box.style.top = `${800 - 50}px`;
            box.style.left = "0px";
            break;
        case 3:
            box.style.top = "0";
            box.style.left = "0";
            break;
    }

    currentPosition++; // Alternar entre as quatro posições
    console.log(currentPosition);

    if (currentPosition === 5) {
        currentPosition = 1;
        box.style.top = "0";
        box.style.left = `${800 - 50}px`;
    }
});
