/**
 * 2C = Two pf Clubs (Tréboles)
 * 2D = Two of diamonds (Diamantes) 
 * 2H = Two of Hearts (Corazones) 
 * 2S = Two of Spaces (Espadas)  
 *  */

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugadorCartas');
const divCartasComputadora = document.querySelector('#computadoraCartas');

let deck = [];
let puntosJugador = 0;
let puntosComputadora = 0;

// Esta función crea una nueva varaja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + 'C');
        }
    }
    
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    // console.log(deck);
    return deck;
}

crearDeck();

// Esta función me permite tomar una carta de la varaja
const pedirCarta = () => {
    if (!deck.length) {
        throw 'No hay cartas en la varaja';
    }
    return deck.pop();
}

// pedirCarta()

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    
    return ( isNaN(valor) )  
        ? ( (valor === 'A') ? 11 : 10 ) 
        : ( Number(valor) );
}

// console.log(valorCarta(pedirCarta()));

// Eventos

const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        // console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    } else if (puntosJugador === 21) {
        // console.warn('21, genial!');
        btnPedir.disabled = true;
    }
});

const turnoComputadora = (puntosJugador) => {
    do {
        const carta = pedirCarta();
        
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        
        divCartasComputadora.append(imgCarta);

        if (puntosJugador > 21) {
            break;
        }
    } while(puntosComputadora < puntosJugador && puntosComputadora <= 21);
    
    setTimeout(() => {
        if (puntosComputadora === puntosJugador) {
            alert('Nadie gana :(');
        } else if (puntosJugador > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }
    }, 100)
}

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    deck = crearDeck();
    puntosComputadora = 0;
    puntosJugador = 0 ;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
});

