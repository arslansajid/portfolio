import React from 'react';
import { Grid, IconButton } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';
import { WhatsappUrl, MessengerUrl } from "../static/Contact";


const ContactButtons = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                className={classes.container}
            >
                <IconButton className={classes.fab} color="inherit"
                    onClick={() => {
                        window.open(WhatsappUrl);
                    }}
                >
                    <img alt="wa-icon" src={require("../assets/images/whatsapp.png")} />
                </IconButton>
                <IconButton className={classes.fab} color="inherit"
                    onClick={() => {
                        window.open(MessengerUrl);
                    }}
                >
                    <img alt="msngr-icon" src={require("../assets/images/messenger.png")} />
                </IconButton>
            </Grid>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position: "fixed",
        right: 10,
        bottom: "2%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    fab: {
        width: 60,
        height: 60,
        padding: 5,
        marginBottom: 5,
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "contain",
        }
    },
}));

export default ContactButtons;
