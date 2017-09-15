import React, { Component } from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './appsource.scss';
import './bootstrap/button.scss';


class ClientComponent extends Component {
    render() {
        return(
            <Jumbotron 
                className="-fluid text-center custom"
                containerFluid={true}
            >
                <h1>
                    Building react.js User Interfaces
                </h1>
                <p>with Bootstrap and SASS</p>
                <p>
                    <Button className='-primary' href="//02geek.com" target="_blank" disabled="true" buttonText="This is a link, dammit!"/>
                    <Button className='-danger' buttonText="This is just a button!"/>
                </p>
            </Jumbotron>
        );
    }
}

        
export default ClientComponent;
        
