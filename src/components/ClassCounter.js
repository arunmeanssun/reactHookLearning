import React, { Component } from 'react';
import "../App.css";

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1  }
        })
    }

  render() {
    const { count } = this.state;
    return (<div className='my-3'>
                    <button onClick={this.incrementCount}>Clicked {count} Times </button>
                </div>
            )
  }
}

export default ClassCounter;