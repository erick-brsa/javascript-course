/**
 * 
 * @param {Array<String>} deck Ejemplo: ['2A', '3H', ..., 'QH']
 * @returns una carta
 */
export const pedirCarta = (deck) => {
    if (!deck.length) {
        throw 'No hay cartas en la varaja';
    }
    return deck.pop();
}