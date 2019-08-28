// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    
    render() {
        let seconds = this.state.secondsLeft
        let text = seconds > 0 ? `${seconds} seconds left before I go boom!` : 'Boom!'
        return text
    }
}

export default Bomb;