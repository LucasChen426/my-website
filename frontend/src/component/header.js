import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Container} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from "@material-ui/core/Link";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        background: 'transparent',
        position: 'absolute',
        top: theme.spacing(1),
        boxShadow: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(2),
        },
        fontFamily: 'Arial',
        fontSize: 20
    }
}));

function ButtonAppBar() {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" className={classes.bar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Title
                    </Typography>
                    <Container maxWidth="sm" className={classes.container}>
                        <Link href="#" color='inherit' onClick={preventDefault}>
                            Home
                        </Link>
                        <Link href="#" color='inherit' onClick={preventDefault}>
                            About
                        </Link>
                        <Link href="#" color='inherit' onClick={preventDefault}>
                            Contact
                        </Link>
                    </Container>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

class Header extends React.Component {
    render() {
        return (
            <header id="home">
                <ButtonAppBar/>
            </header>
        );
    }
}

export default Header;