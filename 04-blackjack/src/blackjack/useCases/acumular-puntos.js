import { valorCarta } from "./valor-carta";

/**
 * Acumula el puntaje del jugador
 * @param {Number} turno Ejemplo: 0 
 * @param {String} carta Ejemplo: '7D' 
 * @param {Array<Number>} puntosJugadores puntos de los jugadores 
 * @returns {Number} Acumulado del jugador
 */
export const acumularPuntos = (turno, carta, puntosHTML, puntosJugadores) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}