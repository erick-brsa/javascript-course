import _ from 'underscore'
import { crearDeck, acumularPuntos, pedirCarta, crearCarta, turnoComputadora } from './useCases';

const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['J', 'Q', 'K', 'A'],
    puntosHTML = document.querySelectorAll('small'),
    divCartasJugadores = document.querySelectorAll('.divCartasJugadores'),
    btnNuevo = document.querySelector('#btnNuevo'),
    btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener');

let deck = [],
    puntosJugadores = [];


const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(0, carta, puntosHTML, puntosJugadores);

    crearCarta(0, carta, divCartasJugadores);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML, divCartasJugadores, puntosJugadores, deck);
    } else if (puntosJugador === 21) {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML, divCartasJugadores, puntosJugadores, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosHTML, divCartasJugadores, puntosJugadores, deck);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});
