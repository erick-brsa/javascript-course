/**
 * Renderiza un elemento HTML de una carta
 * @param {Number} turno Ejemplo: 0 
 * @param {String} carta Ejemplo: 'KD'
 */
export const crearCarta = (turno, carta, divCartasJugadores) => {
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
    return imgCarta
}