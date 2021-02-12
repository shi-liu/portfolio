import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/MediaCard';
import projectList from '../static/projects/projectList';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    ...theme.projectComp
})

/*
Handles the project section by looping through projects in the static folder.
Displays them using the media card component.
*/
function Projects({ classes }){
    return (
        <section id="projects">
            <div className={classes.root}>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Grid item xs={12} align="center">
                        <Typography className={classes.titleFont}>
                            Projects
                        </Typography>
                        <Typography className={classes.hintFont}>
                            Video demos coming soon
                        </Typography>
                    </Grid>
                    {projectList.map((act, i) => (
                        <Grid item sm={6} key={i} align="center">
                            <MediaCard project={act}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    )
}

export default withStyles(styles)(Projects);