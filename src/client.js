import React, { Component } from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';
import './bootstrap/button.scss';


class ClientComponent extends Component {

    constructor(params) {
        super(params);

        this.onClick = this.onClick.bind(this);

        this.state = { click: 0};
    }


    onClick(event) {
        this.setState({click: this.state.click + 1});
    }


    render() {
        return(
            <ReactCSSTransitionGroup
                transitionName='app'
                transitionAppear={true}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppearTimeout={500}
            >
                <Jumbotron
                    className="-fluid text-center custom"
                    containerFluid={true}
                >
                    <h1>
                        Building react.js User Interfaces
                    </h1>
                    <p>with Bootstrap and SASS</p>
                    <p>
                        <Button
                            className='-primary'
                            href="//02geek.com"
                            target="_blank"
                            buttonText="This is a link, dammit!"
                        />
                        <Button
                            onClick={this.onClick}
                            className='-danger'
                            buttonText={this.state.click}
                        />
                    </p>
                </Jumbotron>
            </ReactCSSTransitionGroup>
        );
    }
}

        
export default ClientComponent;
        
