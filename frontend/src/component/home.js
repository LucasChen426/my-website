import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import { Box  } from '@material-ui/core';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    img: {
        width: '100%',
        zIndex: -1,
        margin: '0px'
    },
    card: {
        minWidth: 500,
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-40%, -50%)',
        background: 'transparent',
        boxShadow: 'none'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
}));

function HomeContent() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className={classes.root}>
            {/* <Box maxWidth='xl'> */}
                <Card className={classes.card} >
                    <CardContent>
                        <Typography className={classes.title} color="initial" variant="h6" gutterBottom>
                        123
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            {/* </Box > */}
        </div>
    );
}

class Home extends React.Component {


    render() {
        return (
            <div>
                <HomeContent value={this.props} />
            </div>
        );
    }
}

export default Home;