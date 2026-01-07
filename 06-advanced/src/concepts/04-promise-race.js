/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';
    
    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(renderValue)
};

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slowe Promise')
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('medium Promise')
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fast Promise')
    }, 3000);
});
