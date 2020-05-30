import React, { Component } from 'react'
import './counter.css'
import CounterButton from './counterButton'
import ResetCounter from './resetCounter'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div className="App">
                <CounterButton method={this.incrementonefunc} by={1} decmethod={this.decrementfunc} />
                <CounterButton by={5} method={this.incrementonefunc} decmethod={this.decrementfunc} />
                <CounterButton by={10} method={this.incrementonefunc} decmethod={this.decrementfunc} />
                <span className='counterResult'>{this.state.counter}</span>
                <ResetCounter method={this.resetCounterfunction}></ResetCounter>
            </div>
        );
    }

    incrementonefunc = by => {
        this.setState(
            (prevState) => {
                return { counter: this.state.counter + by }
            }
        )
    }

    decrementfunc = by => {
        this.setState(
            (prevState) => {
                return { counter: this.state.counter - by }
            }
        )
    }

    resetCounterfunction = () => {
        this.setState(
            {
                counter: 0
            }
        )
    }
}

export default Counter