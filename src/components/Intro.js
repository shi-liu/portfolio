import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import pic from '../static/images/profilePic.jpg';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
    ...theme.introComp
})

/*
Handles the avatar and introduction 
*/
function Intro({ classes }){
    return (

        <div className={classes.root}>
            <Grid container align="center" justify="center" alignItems="center"> 
                <Grid item>
                    <Avatar className={classes.avatarSize} src={pic}></Avatar>
                </Grid>
                <Grid item className={classes.itemSize}>
                    <Typography className={classes.titleFont}>
                        Hey there! I'm Shi Hua.
                    </Typography>
                    <Typography>
                        Junior Fullstack Engineer
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Intro);