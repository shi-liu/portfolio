import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    ...theme.contactComp
})

/*
Handles the contact section with the icon buttons.
*/
function Contact({ classes }){
    return (
        <section id="contact">
            <div className={classes.root}>
                <Link to="navbar" smooth={true}>
                    <IconButton color="secondary" style={{marginLeft: "85vw",}}><ArrowUpwardIcon/></IconButton>
                </Link>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography className={classes.titleFont}>
                            Contact Info
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.basicText}>
                            You can reach me at 
                            <a className={classes.anchor} href="mailto:shliu.info@gmail.com" 
                            rel="noopener noreferrer"> shliu.info@gmail.com</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="https://www.linkedin.com/in/shihualiu-info/" target="_blank" rel="noopener noreferrer">
                            <IconButton><LinkedInIcon color="secondary"/></IconButton>
                        </a>
                        <a href="https://github.com/shi-liu" target="_blank" rel="noopener noreferrer"> 
                            <IconButton><GitHubIcon color="secondary"/></IconButton>
                        </a>
                        <IconButton><YouTubeIcon color="secondary"/></IconButton>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default withStyles(styles)(Contact);