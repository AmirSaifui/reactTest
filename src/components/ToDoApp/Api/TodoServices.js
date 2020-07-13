import axios from 'axios'
import { API_URL , JPA_API_URL} from '../../../Constants'

class TodoServices{
    retreiveAllTodosForAUser(name){
        return axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }

    retreiveTodoForAUser(name,id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    deleteTheSelectedTodo(name,id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    updateTheSelectedTodo(name,id,todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo)
    }

    createTodo(name,todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`,todo)
    }
}
export default new TodoServices()