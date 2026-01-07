import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async ( element ) => {

    console.time('start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();
    
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    
    element.innerHTML = `
        value1: ${value1} <br />
        value2: ${value2} <br />
        value3: ${value3} <br />
    `;
    
    console.timeEnd('start');
};

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        throw `Hero not found`;
    }

    return hero;
}    

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
