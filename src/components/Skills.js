import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import reactPic from '../static/images/logo192.png';
import pythonPic from '../static/images/pythonPic.png';
import firebasePic from '../static/images/firebase_192.png';
import ubuntuPic from '../static/images/ubuntu_192.png';
import materialPic from '../static/images/materialPic.png';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    ...theme.skillComp
});

/*
Handles the technologies that I'm familiar with.
They're pre-formatted to be the same size.
*/
function Skills({ classes }){
    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={12}>
                    <Typography className={classes.titleFont}>
                        Stack 
                    </Typography>
                </Grid>
                <img src={pythonPic} alt="Python"/>
                <img src={reactPic} alt="ReactJs"/>
                <img src={ubuntuPic} alt="Ubuntu"/>
                <img src={materialPic} alt="MaterialUi"/>
                <img src={firebasePic} alt="Firebase"/>
            </Grid>
        </div>
    )
};

export default withStyles(styles)(Skills);