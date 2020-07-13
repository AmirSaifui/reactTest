import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from './Api/HelloWorldService.js'

class WelcomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            helloMessage: '',
            errorMessage: ''
        }
    }
    render() {
        return (
            <>
                <div className="container" style={{ color: 'black', backgroundColor: 'red', width: '200px', borderRadius: '27px' }}>
                    {this.state.errorMessage}
                </div>
                <div className="container">
                    <h1>Welcome !!!</h1>
                    <div className="container">Welcome {this.props.match.params.name}. We can create a list <Link to="/todos">here</Link></div>
                </div>
                <div className="container">
                    Click here for welcome msg from backend.
                <button style={{marginLeft:'10px',marginTop:'5px'}}onClick={this.retreiveMessage} className="btn btn-warning">Click me to get message from backend!!!</button>
                </div>
                <div className="container" style={{marginTop:'10px',color:'#1C541C',backgroundColor:'#C7FB21',width: '200px', borderRadius: '27px',fontWeight:'bold'}}> 
                    {this.state.helloMessage}
                </div>
            </>
        )
    }

    retreiveMessage = () => {
        // HelloWorldService.HelloWorldCall()
        // .then(response => this.handleSuccessMsg(response))    <====---FOR NORMAL RESPONSE


        //For json response from bean with a path vaiable in uri
        HelloWorldService.HelloWorldCallWithPathVariable(this.props.match.params.name)
            .then(response => this.handleSuccess(response))
            .catch(error =>this.handleError(error))
    }

    handleSuccess = (response) => {
        this.setState({ helloMessage: response.data.message })
    }

    handleError = (error) => {
        let errorMsg=''
        if(error.message)
        errorMsg+=error.message

        if(error.response && error.response.data)
        errorMsg+=error.response.data.message
        this.setState({ errorMessage: errorMsg })
    }
}

export default WelcomePage