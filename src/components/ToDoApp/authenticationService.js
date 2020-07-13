import axios from 'axios'
import { API_URL } from '../../Constants'
import { JPA_API_URL } from '../../Constants'

export const USERNAME_ATTRIBUTE_SESSION_NAME = 'authenticatedUser'
class AuthenticationService{

    executeBasicAuth(username,password){
        return axios.get(`${API_URL}/basicAuth`,{
            headers:{
                authorization : this.createBasicAuthToken(username,password)
            }
        })
    }

    executeJWTAuth(username,password){
        return axios.post(`${API_URL}/authenticate`,{
            username,
            password 
        })
    }

    createBasicAuthToken(username,password){
        return 'Basic ' + window.btoa(username+':'+password)
    }

    createJWTAuthToken(token){
        return 'Bearer ' + token
    }


    registerSuccessfulLogin(username,password){
        // let basicAuthHeader='Basic ' + window.btoa(username+':'+password)
        sessionStorage.setItem(USERNAME_ATTRIBUTE_SESSION_NAME,username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerSuccessfulLoginForJWT(username,token){
        // let basicAuthHeader='Basic ' + window.btoa(username+':'+password)
        sessionStorage.setItem(USERNAME_ATTRIBUTE_SESSION_NAME,username)
        this.setupAxiosInterceptors(this.createJWTAuthToken(token))
    }

    logout(username,password){
        sessionStorage.removeItem(USERNAME_ATTRIBUTE_SESSION_NAME);
    }

    isUserLoggedIn(){
        let authUser=sessionStorage.getItem(USERNAME_ATTRIBUTE_SESSION_NAME)
        if(authUser===null) return false
        return true
    }

    getLoggedInUser(){
        let authUser=sessionStorage.getItem(USERNAME_ATTRIBUTE_SESSION_NAME)
        if(authUser===null) return ''
        return authUser
    }

    refreshPage(){
        window.location.reload()
    }

    setupAxiosInterceptors(basicAuthHeader){
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}
export default new AuthenticationService()