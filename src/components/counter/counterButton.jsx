import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CounterButton extends Component {

    render() {
        return <div className='counter'>

            <button className='incrementbyone' onClick={()=>this.incrementonefunc(this.props.by)}>+{this.props.by}</button>
            {/* We passed parameters to reference of an function inside onclick event listener in line 9 */}
            
            <button className='decrement' onClick={this.decrementfunc}>-{this.props.by}</button>
        </div>
    }

    //Arrow function enables us to omit binding to 'this' done in line 10
    incrementonefunc = (byValue) => {
        this.props.method(byValue);
    }

    decrementfunc = () => {
        this.props.decmethod(this.props.by);
    }
}

//Define default value for props in case it is not set in the parent <Counter/> element in app.js
CounterButton.defaultProps = {
    by: 1
}

//Defining a constraint/check on the value the prop 'by' can take, in this case which is a number
CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton