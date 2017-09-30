import React, { Component } from 'react';
import Button from './components/button';
import Jumbotron from './components/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles/appsource.scss';
import './styles/bootstrap/_core.scss';


class ClientComponent extends Component {

    constructor(params) {
        super(params);

        this.onClick = this.onClick.bind(this);
        this.onReset = this.onReset.bind(this);

        this.state = { click: 0, labels: []};
    }


    onClick(event) {
        let labels = this.state.labels.concat([this.state.click]);
        this.setState({click: this.state.click + 1, labels: labels});
    }

    onReset(e) {
        this.setState({click: 0, labels: []});

    }


    render() {
        let buttons = this.state.labels.map((item, i) => {
            return <Button key={i}>{item}</Button>

        });
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
                            onClick = {this.onReset}
                            className='-primary'
                            //href="//02geek.com"
                            //target="_blank"
                            label="Reset!"
                        />
                        <Button
                            onClick={this.onClick}
                            className='-danger'>{this.state.click}</Button>
                    </p>
                    <ReactCSSTransitionGroup
                        transitionName='app'
                        // transitionAppear={true}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={508}
                    >
                    {buttons}
                    </ReactCSSTransitionGroup>
                </Jumbotron>
            </ReactCSSTransitionGroup>
        );
    }
}

        
export default ClientComponent;
        
