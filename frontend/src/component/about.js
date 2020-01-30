import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box  } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    box: {
        
    },
    img: {
        width: '100%',
        zIndex: '-1',
        // height: '90vh',
        margin: '0px'
    }
}));

function BgImg() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box maxWidth='xl' className={classes.box}>
                <img src={process.env.PUBLIC_URL + '/images/bg.jpg'} alt="" className={classes.img} />
            </Box >
        </div>
    );
}

class About extends React.Component {

    render() {
        return (
            <BgImg />
        );
    }
}

export default About;