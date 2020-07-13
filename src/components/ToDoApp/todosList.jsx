import React, { Component } from 'react'
import TodoServices from './Api/TodoServices.js'
import AuthenticationService from './authenticationService.js'
import moment from 'moment'

class TodosList extends Component {
    constructor(props) {
        // console.log("constructor")
        super(props)
        this.state = {
            todos: [],
            message: null
        }
    }

    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUser()
        TodoServices.retreiveAllTodosForAUser(username)
            .then(
                response => this.setState({ todos: response.data })
            )
    }

    // UNSAFE_componentWillMount(){
    //     console.log("Component unmounted from view")
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("shouldComponentUpdate")
        // console.log(nextProps)
        // console.log(nextState)
        return true
    }

    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUser()
        // console.log(username,id)
        TodoServices.deleteTheSelectedTodo(username, id)
            .then(
                response => {
                    this.setState({ message: `Deletion of Todos with id: ${id} is successfull` })
                    this.refreshTodos()
                }
            )
    }

    updateTodoClicked = (id) => {
        // console.log("update " + id)
        this.props.history.push(`/todos/${id}`)
        // let username=AuthenticationService.getLoggedInUser()
        // // console.log(username,id)
        // TodoServices.deleteTheSelectedTodo(username,id)
        // .then(
        //     response=>this.setState({message:`Deletion of Todos with id: ${id} is successfull`}),
        //     this.refreshTodos()
        // )
    }

    createNewTodo = () => {
        this.props.history.push("/todos/-1")
    }

    formatDate = (targetDate) => {
        return moment(targetDate).format('YYYY-MM-DD')
    }

    render() {
        // console.log("render")
        return (
            <div className="container">
                <h2>My Todo List</h2>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{this.formatDate(todo.targetDate)}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={this.createNewTodo}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default TodosList