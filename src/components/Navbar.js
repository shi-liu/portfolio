import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Link } from 'react-scroll';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
    ...theme.navComp
})


/*
Navbar based on material ui's component
Used a scroll library for easy static page navigation
*/
function Navbar(){
   
    return (
        <section id="navbar">
            <AppBar position="static">
                <Toolbar style={{background: "black"}}>
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <Link to="about" smooth={true}>
                                <Button size="small" color="secondary">About</Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="projects" smooth={true}>
                                <Button size="small" color="secondary">Projects</Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="contact" smooth={true}>
                                <Button size="small" color="secondary">Contact</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </section>
    )
}

export default withStyles(styles)(Navbar);