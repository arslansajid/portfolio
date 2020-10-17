import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

const ExperienceCard = ({ company, responsibilities, logo, designation, duration, location }) => {
    const classes = useStyles();

    return (
        <>
            <Grid
                className={`${classes.container} ${classes.textCenter}`}
                lg={6} md={6} sm={12} xs={12}
                item
            >
                <div className={company.includes("Roomy") ? classes.roomylogoContainer : classes.logoContainer}>
                    <img alt="company-logo" className={classes.companyLogo} src={require(`../assets/images/${logo}`)} />
                </div>
                <Typography gutterBottom className={classes.heading}>
                    {company}
                </Typography>
                <Typography gutterBottom className={classes.location}>
                    {location}
                </Typography>
                <Typography className={classes.duration}>
                    {duration}
                </Typography>
            </Grid>
            <Grid
                className={classes.container}
                lg={6} md={6} sm={12} xs={12}
                item
            >
                <Typography className={classes.designation}>
                    {designation}
                </Typography>
                <div className={classes.border} />
                <div className={classes.description}>
                    Daily responsibilities include: <br />
                    <ul className={classes.linksList}>
                        {
                            responsibilities.map((responsibility, index) => (
                                <li key={index} className={classes.footerLink}>{responsibility}</li>
                            ))
                        }
                    </ul>
                </div>
            </Grid>

        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        borderRadius: 5,
        padding: 20,
        minHeight: 250,
        margin: "2em 0 2em 0",

        [theme.breakpoints.down('sm')]: {
            padding: 0,
            margin: "1em 0 1em 0",
        },
    },
    textCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    roomylogoContainer: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: '50%',
        overflow: "hidden",

        [theme.breakpoints.down('sm')]: {
            width: 125,
            height: 125,
        },
    },
    logoContainer: {
        width: 150,
        height: 150,
        marginBottom: 10,
        overflow: "hidden"
    },
    companyLogo: {
        width: '100%',
        height: '100%',
        objectFit: "contain",
        overflow: "hidden"
    },
    heading: {
        fontWeight: 600,
        fontSize: "1.5em",
        textAlign: 'center'
    },
    designation: {
        fontWeight: 600,
        fontSize: "1.5em",
        marginBottom: "10px",
        color: Colors.textBlack,
    },
    description: {
        fontSize: "1.25em",
    },
    icon: {
        fontSize: '3em',
        fontWeight: 'bolder',
        marginBottom: "15px",
        color: Colors.appRed
    },
    border: {
        background: Colors.appRed,
        height: "7px",
        width: "65px",
        marginTop: "10px",
        marginBottom: "20px"
    },
    linksList: {
        listStyleType: 'square',
        paddingInlineStart: '20px !important',
    },
    footerLink: {
        fontSize: "1em",
        fontWeight: 500,
        color: Colors.textBlack,
        marginBottom: 10,
    },
    location: {
        textAlign: "center",
        fontSize: "1.125em",
    },
    duration: {
        textAlign: "center",
        fontSize: "1.125em",
        color: Colors.textGrey,
      },
}));

export default ExperienceCard;
