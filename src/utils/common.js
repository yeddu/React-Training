const TOKEN_KEY = 'user';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'LoggedIn');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}