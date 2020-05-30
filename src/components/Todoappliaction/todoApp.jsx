import React, { Component } from 'react'

class Todoapp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
                <WelcomeComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            hasLoginFailed:false,
            isLoginSuccessful:false
        }
    }
    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invalid Creds</div>}
                Username : <input id="username" type="text" value={this.state.username} onChange={this.handleChange}></input>
                Password : <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
                <button id="loginbtn" onClick={this.loginClicked}>Sign-in</button>
            </div>
        )
    }

    handleChange=(event)=>{
        this.setState(
            {
                [event.target.id]:event.target.value
            }
        )
    }

    loginClicked=()=>{
        if(this.state.username==='amir' && this.state.password==='saif'){
            this.setState({hasLoginFailed:false,isLoginSuccessful:true})
        }else{
            this.setState({hasLoginFailed:true,isLoginSuccessful:false})
        }
    }
    
}


class WelcomeComponent extends Component{
    render(){
        return(
            <div>Welcome Again u unlucky idiot</div>
        )
    }
}

export default Todoapp


// return (
//     <>
//     {/* <Router>
//         <>
//         <HeaderComponent/>
//         <Switch>
//             <Route path="/" exact component={LoginToDoApp} />
//             <Route path="/login" exact component={LoginToDoApp} />
//             <Route path="/welcome/:name" exact component={WelcomePage} />
//             <Route path="/todos" exact component={TodosList} />
//             <Route path="/logout" exact component={LogoutComponent} />
//             <Route component={ErrorPage} />
//         </Switch>
//         <FooterComponent/>
//         </>
//     </Router> */}
//     {/* <LoginToDoApp></LoginToDoApp>
// <WelcomePage></WelcomePage> */}
// </>
// )