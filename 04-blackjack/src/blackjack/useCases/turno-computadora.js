import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";

/**
 * Turno de la computadoras
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {NodeListOf<HTMLElement>} puntosHTML puntos de los jugadores <small>
 * @param {NodeListOf<Element>} puntosHTML divCartas
 * @param {Array<Number>} puntosJugadores puntos de los jugadores
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasJugadores, puntosJugadores, deck = []) => {
    if (!puntosMinimos) {
        throw new Error('Puntos mínimos necesarios')
    }
    if (!puntosHTML) {
        throw new Error('puntosHTML es necesario')
    }

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta, puntosHTML, puntosJugadores);
        crearCarta(puntosJugadores.length - 1, carta, divCartasJugadores,);
    } while ((puntosComputadora < puntosMinimos) && (puntosComputadora < 21));
    determinarGanador(puntosJugadores);
}