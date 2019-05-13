const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() { console.log(idInput)
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}