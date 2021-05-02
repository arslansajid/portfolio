import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                className={classes.textCenter}
            >
                <Typography className={classes.sectionHeading}>
                    Want to work together?
                </Typography>
                <div className={classes.border} />
                <Typography className={classes.description}>
                    Interested in working together? We should queue up a chat. I’ll buy the coffee.
                </Typography>
                <Button
                    className={classes.hireButton}
                    size="large"
                    variant="outlined"
                    color="primary"
                >Contact
                </Button>
            </Grid>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    textCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#FF5E6B",
        padding: 30
    },
    sectionHeading: {
        fontSize: "2.25em",
        fontWeight: 600,
        lineHeight: "40px",
        marginBottom: "20px",
        color: "white",
        textAlign: "center",
    },
    description: {
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "32px",
        color: "white",
        marginBottom: 30
    },
    hireButton: {
        textTransform: "capitalize",
        color: "white",
        borderColor: "white",
        borderWidth: "2px",
        fontSize: "1.25em",
        minWidth: 200,

        "&:hover": {
            color: Colors.appRed,
            borderWidth: "2px",
            borderColor: "#FF5E6B",
            background: "white"
        }
    }
}));

export default Footer;
