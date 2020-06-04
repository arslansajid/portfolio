import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import WebIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

const AchievementCard = ({heading, description, icon}) => {
    const classes = useStyles();

    const renderIcon = (icon) => {
        switch(icon) {
            case "web": {
                return (
                    <WebIcon className={classes.icon} />
                )
            }
            case "mobile": {
                return (
                    <PhoneIcon className={classes.icon} />
                )
            }
            case "code": {
                return (
                    <CodeIcon className={classes.icon} />
                )
            }
            default: return null;
        }
    }

    return (
        <>
            <Grid
                className={classes.container}
            >
                {renderIcon(icon)}
                <Typography
                    className={classes.heading}
                >
                    {heading}
                </Typography>
                <Typography
                    className={classes.description}
                >
                    {description}
                </Typography>
            </Grid>

        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: 250,

        [theme.breakpoints.down('md')]: {
            marginBottom: 20,
        },

    },
    heading: {
        fontWeight: 600,
        fontSize: "1.75em",
        marginBottom: "10px",
        textAlign: 'center'
    },
    description: {
        fontSize: "1.25em",
        textAlign: "center",
    },
    icon: {
        fontSize: '3em',
        fontWeight: 'bolder',
        marginBottom: "15px",
        color: Colors.appRed
    }
}));

export default AchievementCard;
