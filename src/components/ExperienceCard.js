import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import WebIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

const ExperienceCard = ({heading, description, icon}) => {
    const classes = useStyles();

    return (
        <>
            <Grid
            lg={6} md={6} sm={12} xs={12}
            item
          >
            Company
          </Grid>
          <Grid
            lg={6} md={6} sm={12} xs={12}
            item
          >
            Detail
          </Grid>

        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 5,
        padding: 20,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        minHeight: 250

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

export default ExperienceCard;
