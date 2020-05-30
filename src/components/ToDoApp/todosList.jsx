import React, { Component } from 'react'

class TodosList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'I wanna become a dev', done: false, targetDate: new Date() },
                { id: 2, description: 'I wanna earn more', done: false, targetDate: new Date() },
                { id: 3, description: 'I wanna realise my dreams', done: false, targetDate: new Date() }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <h2>My Todo List</h2>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>

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
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )

    }
}

export default TodosList