import { localhostUserToModel } from "../mappers/localhost-user-mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const { data, first, last } = await res.json();

    if (page > last || !first) return [];

    const users = data.map(userLike => localhostUserToModel(userLike));
    return users;
}