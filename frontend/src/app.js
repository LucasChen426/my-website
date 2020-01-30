import React from 'react';
import Header from './component/header';
import Home from './component/home';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {makeStyles} from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

const useStyles = makeStyles(theme => ({
    img: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg2.jpg'})`,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        margin: '0px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

function HomeBackground() {
    const classes = useStyles();
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/images/bg2.jpg'} alt="" className={classes.img}>
            </img>
            <Header />
            <Home />
        </div>
    );
}

class App extends React.Component {


    render() {
        return (
            <ThemeProvider theme={darkTheme}>
                <HomeBackground/>
            </ThemeProvider> 
        );
    }
}

export default App;