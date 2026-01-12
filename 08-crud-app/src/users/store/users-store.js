import { loadUsersByPage } from "./load-users";

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;
    state.currentPage++;
    state.users = users;
}

const loadPreviousPage = async () => {
    const users = await loadUsersByPage(state.currentPage - 1);
    if (users.length === 0) return;
    state.currentPage--;
    state.users = users;
}

const onUserChanged = () => {
    throw new Error('Not implemented');
}

const reloadPage = async() => {
    throw new Error('Not implemented');
}
    
export default {
    loadNextPage,
    loadPreviousPage,    
    onUserChanged,   
    reloadPage,
    
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
}
