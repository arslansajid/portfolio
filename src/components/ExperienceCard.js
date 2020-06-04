import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

const ExperienceCard = ({ company, description, icon, designation }) => {
    const classes = useStyles();

    return (
        <>
            <Grid
                className={`${classes.container} ${classes.textCenter}`}
                lg={6} md={6} sm={12} xs={12}
                item
            >
                <div className={company.includes("Roomy") ? classes.roomylogoContainer : classes.logoContainer}>
                    {
                        company.includes("Roomy")
                            ?
                            <img alt="roomy-icon" className={classes.companyLogo} src={require("../assets/images/roomy.png")} />
                            :
                            company.includes("Graana")
                                ?
                                <img alt="graana-icon" className={classes.companyLogo} src={require("../assets/images/graana.png")} />
                                :
                                company.includes("LLC")
                                    ?
                                    <img alt="codeMemory-icon" className={classes.companyLogo} src={require("../assets/images/cm.png")} />
                                    :
                                    <img alt="care-icon" className={classes.companyLogo} src={require("../assets/images/care.png")} />
                    }

                </div>
                <Typography className={classes.heading}>
                    {company}
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
                        <li className={classes.footerLink}>{'Development of front end web & cross-platform mobile components for company projects.'}</li>
                        {company.includes("Graana") && (
                            <>
                                <li className={classes.footerLink}>Worked on the graana.com web portal and delivered responsive front-end components.</li>
                                <li className={classes.footerLink}>Bootstrapped the project and delivered the first release.</li>
                            </>
                        )}
                        <li className={classes.footerLink}>{'Coordinating with QA engineers and project managers on analysing requirements and execution plans. Involved in the complete DevOps cycle.'}</li>
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
        margin: "40px 0 40px 0"
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
        // background: Colors.appPinkLite,
        // boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.04)",
        overflow: "hidden"
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
        fontSize: "1.75em",
        marginBottom: "10px",
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
}));

export default ExperienceCard;
