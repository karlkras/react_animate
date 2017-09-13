import React, { Component } from 'react';
import Utils from './utils';
import './button.scss';

export default class Button extends Component {
    render() {
        const props = Object.assign({}, this.props);
        const Tag = props.href ? 'a' : 'button';
        const className = Utils.classify('btn', props.className)
            +(props.disabled ? ' disabled' : '');
        const buttonText = props.buttonText;
        delete props.buttonText;    
        return (
            <Tag {...props} className={className}>{buttonText}</Tag>
        );
    };
}