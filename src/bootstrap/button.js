import React, { Component } from 'react';
import Utils from './utils';
import './button.scss';

export default class Button extends Component {
    render() {
        const props = Object.assign({}, this.props);
        const Tag = props.href ? 'a' : 'button';
        const className = Utils.classify('btn', props.className)
            +(props.disabled ? ' disabled' : '');
        return (
            <Tag {...props} className={className}>{this.props.label || this.props.children}</Tag>
        );
    };
}