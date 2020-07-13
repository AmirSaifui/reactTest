import axios from 'axios'

class HelloWorldService{
    HelloWorldCall(){
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    HelloWorldCallWithPathVariable(name){
        // let username='amir'
        // let password='saif'
        // let basicAuthHeader='Basic ' + window.btoa(username+':'+password)
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`
        // ,
        // {
        //     headers : {
        //         authorization:basicAuthHeader
        //     }
        // }
        )
    }
}
export default new HelloWorldService()