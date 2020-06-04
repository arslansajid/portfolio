import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Colors from '../styles/Colors';

const ExperienceCard = ({company, description, icon}) => {
    const classes = useStyles();

    return (
        <>
            <Grid
            className={`${classes.container} ${classes.textCenter}`}
            lg={6} md={6} sm={12} xs={12}
            item
          >
              <div className={classes.logoContainer}>
                  {
                      company.includes("Roomy")
                      ?
                      <img alt="roomy-icon" className={classes.companyLogo} src={require("../assets/images/roomy.png")} />
                      :
                      company.includes("Graana")
                      ?
                      <img alt="graana-icon" className={classes.companyLogo} src={require("../assets/images/graana.png")} />
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
            <Typography className={classes.description}>Detail</Typography>
          </Grid>

        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        borderRadius: 5,
        padding: 20,
        minHeight: 250
    },
    textCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    logoContainer: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: '50%',
        // background: Colors.appPinkLite,
        boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.04)",
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
