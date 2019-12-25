// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() {
        let boom = this.state.secondsLeft === 0
        // console.log(this.props);
        return (
            !boom ? <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>
        )
    }
};
