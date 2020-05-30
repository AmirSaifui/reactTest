import React, { Component } from 'react'
import AuthenticationService from './authenticationService.js'

class LoginToDoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoginSuccessful: false,
            hasLoginFailed: false
        }
    }
    render() {
        return (
            <>
            <h1>Login</h1>
            <div className="container">
                {/* <label id="labeltodoapp">My Todo App</label> */}
                {/* <IsLoginSuccessfulFunction isLogin={this.state.isLoginSuccessful}></IsLoginSuccessfulFunction>
                <HasLoginFailedFunction hasFailed={this.state.hasLoginFailed}></HasLoginFailedFunction> */}
                {/* {this.state.isLoginSuccessful && <div>Login successful</div>} */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Credentials sahi daal bkl !!!</div>}<hr />
                Username : <input id="username" type="text" onChange={this.handleUpdate} value={this.state.username}></input>
                Password : <input id="password" type="password" onChange={this.handleUpdate} value={this.state.password}></input>
                <button id="loginbtn" onClick={this.loginSubmit} className="btn btn-success">Sign-in</button>
            </div>
            </>
        )
    }

    loginSubmit = () => {
        if (this.state.username === 'amir' && this.state.password === 'saif') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`) //To navigate to welcome page
            this.setState(
                {
                    isLoginSuccessful: true,
                    hasLoginFailed: false
                }
            )
        } else {
            this.setState(
                {
                    hasLoginFailed: true,
                    isLoginSuccessful: false
                }
            )
        }
    }

    // Applying change on target element(event.target) as per the value of id attribute, 
    // hence no need of 2 different funcS for change update on elements in line 17 and 18
    handleUpdate = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
}

// function IsLoginSuccessfulFunction(props) {
//     if (props.isLogin) {
//         return <div>Login successful</div>
//     } else {
//         return null
//     }
// }

// function HasLoginFailedFunction(props) {
//     if (props.hasFailed) {
//         return <div>Invalid login credentials</div>
//     } else {
//         return null
//     }
// }


export default LoginToDoApp