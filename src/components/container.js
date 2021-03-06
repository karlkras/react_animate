import React, { Component } from 'react';

import '../styles/bootstrap/_core.scss';


export default class Container extends Component {
    render() {
        const cls = `container${this.props.fluid ? '-fluid' : ''} ${this.props.className || ''}`;
        return (
            <div 
                className={cls} style={this.props.style}
            >
                {this.props.children}
            </div>
        );
    };
}