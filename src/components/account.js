let user = null || JSON.parse(localStorage.getItem('user'))

export const setAccount = (account) => {
    user = account;
    localStorage.setItem('user', JSON.stringify(account))
}

export const getAccount = () => {
    return user
}