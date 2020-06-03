import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const AchievementCard = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                className={classes.container}
            >
                <Typography
                    className={classes.heading}
                >
                    HAHAHHAHA
                </Typography>
                <Typography
                    className={classes.description}
                >
                    HAHHAHA
                </Typography>
            </Grid>

        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 5,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"

    },
    heading: {
        fontWeight: 600,
        fontSize: "2em",
        marginBottom: "10px",
        textAlign: 'center'
    },
    description: {
        fontSize: "1.25em",
        textAlign: "center",
    },
}));

export default AchievementCard;
