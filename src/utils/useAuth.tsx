export const useAuth = () => {
    //getting token from local storage
    const user = localStorage.getItem('loginToken')
    // console.log('useauth')
    //checking whether token is preset or not
    if (user) {
        // console.log('useauth', user)
        return user;
    } else {
        return false;
    }
};