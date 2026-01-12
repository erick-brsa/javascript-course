import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) => {
    const user = new User(userLike);
    // TODO: aquí falta un maper

    if (user.id) {
        throw 'No implementada la actualización';
        return;
    }
    
    const updatedUser = await createUser(user)
}

/**
 * @param {Like<User>} user
 */
const createUser = async (user) => {
    const url = `${import.meta.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    return newUser;
}
