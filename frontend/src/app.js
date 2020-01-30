import React from 'react';
import Header from './component/header';
import About from './component/about';

class App extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <About />
            </div> 
        );
    }
}

export default App;