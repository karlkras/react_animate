import React, { Component } from 'react';

export default class MyButton extends Component {
    render() {
        const className = this.props.className  +(this.props.disabled ? ' disabled' : '');
        return (
            <a {...this.props} >Discover Things!</a>
        );
    };
}