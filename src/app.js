import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClientComponent from './client';

class App extends Component {
    render() {
        return (
            <ClientComponent/>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('react'));