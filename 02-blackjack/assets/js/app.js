/**
 * 2C = Two pf Clubs (Tréboles)
 * 2D = Two of diamonds (Diamantes) 
 * 2H = Two of Hearts (Corazones) 
 * 2S = Two of Spaces (Espadas)  
 *  */

const miModulo = (() => {
    'use strinct'

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
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo)
            }
        }
        return _.shuffle(deck);
    }

    const pedirCarta = () => {
        if (!deck.length) {
            throw 'No hay cartas en la varaja';
        }
        return deck.pop();
    }

    const valorCarta = (carta) => {
        console.log(deck)
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor))
            ? ((valor === 'A') ? 11 : 10)
            : (Number(valor));
    }

    // Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (turno, carta) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana');
            }
        }, 100)
    }

    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta);
            crearCarta(puntosJugadores.length - 1, carta);
        } while ((puntosComputadora < puntosMinimos) && (puntosComputadora < 21));
        determinarGanador();
    }

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0, carta);

        crearCarta(0, carta);

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();
