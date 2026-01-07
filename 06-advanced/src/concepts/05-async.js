import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id = '5d86371f233c9f2425f16916';
    findHero(id)
        .then( name => element.innerHTML = name)
        .catch( error => element.innerHTML = error)
    
    
};

/**
 * 
 * @param {Promise<String>} id 
 * @returns String
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        throw `Hero with id ${id} not found`
    }
    
    return hero.name;
}
