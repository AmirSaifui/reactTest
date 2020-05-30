import React, { Component } from 'react'
import LoginToDoApp from './loginTodoApp'
import WelcomePage from './welcomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorPage from './errorComponent'
import TodosList from './todosList'
import HeaderComponent from './headerComponent'
import LogoutComponent from './logoutComponent'
import FooterComponent from './footerComponent'

class Todoapp extends Component {
    render() {
        return (
                <>
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginToDoApp} />
                        <Route path="/login" exact component={LoginToDoApp} />
                        <Route path="/welcome/:name" exact component={WelcomePage} />
                        <Route path="/todos" exact component={TodosList} />
                        <Route path="/logout" exact component={LogoutComponent} />
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