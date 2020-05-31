import React, { Component } from 'react'
import { Link ,withRouter} from 'react-router-dom'
import AuthenticationService from './authenticationService.js'

class HeaderComponent extends Component{
    render(){
        const userLoggedIn = AuthenticationService.isUserLoggedIn()
        return (
                < header >
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.google.co.in" className="navbar-brand">Google</a></div>
                    <ul className="navbar-nav">
                        {userLoggedIn && <li><Link className="nav-link" to="/welcome/amir">Home</Link></li>}
                        {userLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!userLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {userLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
        </header>
        
    )
    }
}
export default withRouter(HeaderComponent)