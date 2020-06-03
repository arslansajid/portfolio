import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import FavoriteBorder from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles, Button } from '@material-ui/core';

const Footer = () => {
    const classes = useStyles();

    return (
        <>
        <Container
            disableGutters
            maxWidth='xl'
        >
            <Grid
                className={classes.footerContainer}
                justify="center"
                alignItems="center"
                container lg={12} md={12} sm={12} xs={12} item
            >
                <Grid lg={4} md={4} sm={12} xs={12} item>
                    {/* <Link className={classes.logoContainer} to="/"> */}
                        {/* <img className={classes.logo} src={require("../assets/images/logo.png")} alt="logo" /> */}
                    {/* </Link> */}
                </Grid>
                <Grid lg={4} md={4} sm={12} xs={12} item>
                    <div className={classes.iconsContainer}>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            
                        >
                            <GitHubIcon />
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            
                        >
                            <LinkedInIcon />
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            
                        >
                            <FacebookIcon />
                        </Button>
                    </div>
                </Grid>
                <Grid lg={4} md={4} sm={12} xs={12} item>
                    <div className={classes.textRight}>
                        <Typography className={classes.copyRightText}>
                            Made with <FavoriteBorder className={classes.heartIcon} /> by Arslan Sajid in 2020.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            </Container>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        padding: '20px 0 20px 0',
    },
    heartIcon: {
        color: "red",
        fontSize: 16
    },
    iconsContainer: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        width: '40px',
        height: '40px',
        marginRight: '22px',
    },
    copyRightText: {
        fontWeight: 500,
        fontSize: 16,

        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            margin: 20
        },
    },
    textRight : {
        textAlign: 'right'
    },
    logoContainer: {
    },
    logo: {
        width: 50,
        height: 28,
        objectFit: "contain",
    },
    button: {
        borderRadius: '50%',
        width: 65,
        height: 65,
        margin: 10
    }
}));

export default Footer;
