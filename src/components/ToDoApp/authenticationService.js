class AuthenticationService{
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout(username,password){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let authUser=sessionStorage.getItem('authenticatedUser')
        if(authUser===null) return false
        return true
    }

    refreshPage(){
        window.location.reload()
    }
}
export default new AuthenticationService()