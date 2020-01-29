import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header />
        );
    }
}

export default App;