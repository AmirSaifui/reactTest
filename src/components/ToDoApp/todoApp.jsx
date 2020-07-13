import React, { Component } from 'react'
import LoginToDoApp from './loginTodoApp'
import WelcomePage from './welcomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorPage from './errorComponent'
import TodosList from './todosList'
import HeaderComponent from './headerComponent'
import LogoutComponent from './logoutComponent'
import FooterComponent from './footerComponent'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import TodoComponent from './todoComponent.jsx'

class Todoapp extends Component {
    render() {
        return (
                <>
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginToDoApp} />
                        <Route path="/login" component={LoginToDoApp} />
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomePage} />
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                        <AuthenticatedRoute path="/todos" component={TodosList} />
                        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                        <Route component={ErrorPage} />
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
                {/* <LoginToDoApp></LoginToDoApp>
            <WelcomePage></WelcomePage> */}
            </>
        )
    }
}

export default Todoapp