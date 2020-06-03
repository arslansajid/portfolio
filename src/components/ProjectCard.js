import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Colors from '../styles/Colors';
import { makeStyles } from '@material-ui/core';
import imageUrl from "../assets/images/landing.jpg";


const ProjectCard = (props) => {
    const {title} = props;
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root} elevation={3}>
                {/* <CardActionArea> */}
                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title={title}
                    />
                    <div className={classes.dateContainer}>
                        <div className={classes.dateTextContainer}>
                            <Typography className={classes.dateText}>24 Jun, 2020</Typography>
                        </div>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {title}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            Lorem Ipsum is simply dummy text of the printing been the industry's standard...
                        </Typography>
                        <div className={classes.readmoreContainer}>
                            <div className={classes.border} />
                            <Typography className={classes.readmoreText}>View on GitHub</Typography>
                        </div>
                    </CardContent>
                {/* </CardActionArea> */}
            </Card>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 350,
        // boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.08)",
    },
    media: {
        height: 300,
    },
    cardButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    dateContainer: {
        position: "relative",
        marginBottom: 50
    },
    dateTextContainer: {
        position: "absolute",
        transform: "rotate(90deg)",
        bottom: 10,
        padding: "15px 25px 15px 25px" ,
        borderRadius: 5,
        background: Colors.appRed,
    },
    dateText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 500
    },
    cardButton: {
        backgroundColor: Colors.blue,
        borderRadius: '20px',
        fontWeight: 'bolder',
        textTransform: 'capitalize',
        color: Colors.white,
        whiteSpace: 'nowrap',
        minWidth: 150,
    },
    readmoreContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    readmoreText: {
        fontSize: 24,
        fontWeight: 600,
        color: Colors.appRed
    },
    border: {
        background: Colors.appRed,
        marginRight: 15,
        width: 33,
        height: 3,
    }
}));

export default ProjectCard;
