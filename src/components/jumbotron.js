import React, { Component } from 'react';
import Utils from '../utilities/utils';
import Container from './container';
const STYLE_NAME = 'jumbotron';
import '../styles/bootstrap/jumbotron.scss';

export default class Jumbotron extends Component {
    render() {
        const props = Object.assign({}, this.props);
        props.className = Utils.classify(STYLE_NAME, props.className);
        const containerFluid = props.containerFluid;
        delete props.containerFluid;
        
        const body = 
            props.className.includes(STYLE_NAME + '-fluid') ? 
                <Container fluid={containerFluid}>
                    {props.children}
                </Container> :
                this.props.children;
        return (
            <div 
                {...props}
                className={props.className} 
            >
                {body}
            </div>
        );
    };
}
