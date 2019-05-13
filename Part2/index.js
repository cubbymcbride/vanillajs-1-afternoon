const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() { console.log(idInput)
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function resetCards(){
 const card = document.getElementById(idInput.value)
 card.style.color = 'grey';
 document.getElementById("idInput").value = '';
 document.getElementById("colorInput").value = '';
}