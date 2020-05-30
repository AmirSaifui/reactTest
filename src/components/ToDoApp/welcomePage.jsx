import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WelcomePage extends Component {
    render() {
        return (
        <>
            <h1>Welcome !!!</h1>
            <div className="container">Welcome {this.props.match.params.name}. We can create a list <Link to="/todos">here</Link></div>
        </>
        )
    }
}

export default WelcomePage