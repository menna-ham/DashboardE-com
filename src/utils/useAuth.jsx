export const useAuth = () => {
    //getting token from local storage
    const user = localStorage.getItem('loginToken')
    //checking whether token is preset or not
    if (user) {
        return true;
    } else {
        return false
    }
};