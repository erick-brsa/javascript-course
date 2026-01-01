/**
 * Obtiene el valor numérico de la carta
 * @param {String} carta Ejemplo: '6H'
 * @returns 
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor))
        ? ((valor === 'A') ? 11 : 10)
        : (Number(valor));
}