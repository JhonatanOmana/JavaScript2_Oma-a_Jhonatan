// script.js
document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
    const cartaImg = document.getElementById('carta-img');
    const nuevaCartaBtn = document.getElementById('nueva-carta');
    const opcionesDiv = document.getElementById('opciones');
    const resultadoDiv = document.getElementById('resultado');

    let cartaActual = null;

    nuevaCartaBtn.addEventListener('click', async () => {
    
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            cartaActual = data.cards[0];
            cartaImg.src = cartaActual.image;
            mostrarOpciones();
        } catch (error) {
            console.error('Error al obtener la carta:', error);
        }
    });

    function mostrarOpciones() {
        opcionesDiv.innerHTML = '';
        const valores = ['AS', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const palos = ['hearts', 'diamonds', 'clubs', 'spades'];
        
        
        for (let i = 0; i < 4; i++) {
            const valor = valores[Math.floor(Math.random() * valores.length)];
            const palo = palos[Math.floor(Math.random() * palos.length)];
            const carta = `${valor}_${palo}`;
            const img = document.createElement('img');
            img.src = 'https://deckofcardsapi.com/static/img/back.png'; 
            img.dataset.carta = carta;
            img.dataset.valor = valor;
            img.dataset.palo = palo;
            img.addEventListener('click', voltearCarta);
            opcionesDiv.appendChild(img);
        }
    }

    function voltearCarta(event) {
        const img = event.target;
        if (img.src.includes('back.png')) {
            const valor = img.dataset.valor;
            const palo = img.dataset.palo;
            img.src = `https://deckofcardsapi.com/static/img/${valor}_${palo}.png`;
            
            const cartaDescripcion = `${cartaActual.value}_${cartaActual.suit}`;
            if (cartaDescripcion === img.dataset.carta) {
                resultadoDiv.textContent = '¡Adivinaste!';
                resultadoDiv.style.color = 'green';
            } else {
                resultadoDiv.textContent = 'No adivinaste.';
                resultadoDiv.style.color = 'red';
            }
        }
    }
});
