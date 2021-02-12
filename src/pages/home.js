import React from 'react';
import Grid from '@material-ui/core/Grid';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    ...theme.homeComp
})

/*
Assembles all the different sections together in page
*/
function Home(){
    return (
        <Grid container direction="column" justify="space-evenly" alignItems="center">
            <Grid item xs={12} align="center">
                <Intro/>
            </Grid>
            <Grid item xs={12} align="center"> 
                <About/>
            </Grid>
            <Grid item xs={12} align="center">
                <Projects/>
            </Grid>
            <Grid item xs={12} align="center">
                <Skills/>
            </Grid>
            <Grid item xs={12}>
                <Contact/>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Home);