import React, {Component} from 'react'

class ResetCounter extends Component{
    render(){
        return  (
            <div className='reset'>
                <button className='resetButton' onClick={this.resetCounterfunc}>Reset</button>
            </div>
        )
    }

    resetCounterfunc=()=>{
        this.props.method()
    }
}

export default ResetCounter