import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Language';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Colors from '../styles/Colors';
import { makeStyles, Button } from '@material-ui/core';
import imageUrl from "../assets/images/landing.jpg";


const ProjectCard = (props) => {
    const {title, completionDate, github, website, githubLink, websiteLink, image, description} = props;
    const classes = useStyles();

    const goToRoute = (url) => {
        window.open(url, '_blank');
    } 

    return (
        <>
            <Card className={classes.root} elevation={3}>
                {/* <CardActionArea> */}
                    <CardMedia
                        className={classes.media}
                        image={!!image ? require(`../assets/images/projects/${image}`) : imageUrl}
                        title={title}
                    />
                    <div className={classes.dateContainer}>
                        <div className={classes.dateTextContainer}>
                            <Typography className={classes.dateText}>{completionDate}</Typography>
                        </div>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {title}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            {
                                !!description
                                ?
                                description
                                :
                                "Lorem Ipsum is simply dummy text of the printing been the industry's standard..."
                            }
                        </Typography>
                        <div className={classes.readmoreContainer}>
                            <div className={classes.border} />
                            <Button
                                disabled={!github}
                                startIcon={<GitHubIcon />}
                                color="default"
                                variant="text"
                                className={classes.readmoreText}
                                onClick={() => goToRoute(githubLink)}
                                >
                                    View on GitHub
                            </Button>
                            <Button
                                disabled={!website}
                                startIcon={<WebIcon />}
                                color="secondary"
                                variant="text"
                                className={classes.readmoreText}
                                onClick={() => goToRoute(websiteLink)}
                                >
                                View Live
                            </Button>
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
        margin: 10,
        [theme.breakpoints.down('md')]: {
            marginBottom: 20,
        },
    },
    media: {
        height: 300,
        [theme.breakpoints.down('sm')]: {
            height: 250,
        },
    },
    cardButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    dateContainer: {
        position: "relative",
        marginBottom: '1em'
    },
    dateTextContainer: {
        position: "absolute",
        transform: "rotate(90deg)",
        right: -20,
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
        marginTop: 10
    },
    readmoreText: {
        // fontSize: '1.25em',
        fontWeight: 500,
        textTransform: 'capitalize',
        // color: Colors.appRed,
        marginRight: 10,
        whiteSpace: "noWrap",
    },
    border: {
        background: Colors.appRed,
        marginRight: 15,
        width: 33,
        height: 3,
    }
}));

export default ProjectCard;
