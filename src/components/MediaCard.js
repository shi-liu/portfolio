import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    ...theme.mediaComp
})


/*
Formats the card component based on each project.
Displays the dialog box on card click
*/
function MediaCard({ classes, project }){
    const [dialog, setDialog] = useState(false);

    const handleClose = () => {
        setDialog(false);
    }

    return (
        <Card className={classes.root}> 
            <Dialog open={dialog} onClose={handleClose}>
                <DialogTitle align="center">
                    <DialogContentText className={classes.titleFont}>
                        {project.title}
                    </DialogContentText>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className={classes.basicFont}>
                        <b>Technologies:</b> {project.technologies}
                    </DialogContentText>
                    <DialogContentText className={classes.basicFont}>
                        Description: {project.description}
                    </DialogContentText>
                    <DialogContentText className={classes.basicFont}>
                        Thoughts: {project.reflection}
                    </DialogContentText>
                    <DialogContentText className={classes.basicFont}>
                        Duration: {project.duration}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <CardActionArea onClick={()=> setDialog(!dialog)}>
                <CardMedia className={classes.media}
                image={project.img}
                alt={project.title}/>
                <CardContent className={classes.contentRoot}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.mediaTitle}>
                        {project.title}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.basicFont}>
                        {project.intro}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default withStyles(styles)(MediaCard);