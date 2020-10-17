import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import HeartIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles, IconButton } from '@material-ui/core';
import Colors from '../styles/Colors';

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <Container
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
                            <a
                                href="https://www.instagram.com/arslan.sajidkhan/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <IconButton
                                variant="contained"
                                // color="secondary"
                                // className={`${classes.button} `}
                            >
                                <InstagramIcon />
                            </IconButton>
                            </a>
                            <a
                                href="https://fb.com/arslan.sajid.773"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconButton
                                    variant="contained"
                                    // color="primary"
                                    // className={`${classes.button} ${classes.fbButton}`}
                                >
                                    <FacebookIcon />
                                </IconButton>
                            </a>
                            <a
                                href="https://github.com/arslansajid"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <IconButton
                                variant="contained"
                                // color="default"
                                // className={classes.button}

                            >
                                <GitHubIcon />
                            </IconButton>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/arslan-sajid-b13005107/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <IconButton
                                variant="contained"
                                // color="primary"
                                // className={`${classes.button} ${classes.liButton}`}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            </a>
                        </div>
                    </Grid>
                    <Grid lg={4} md={4} sm={12} xs={12} item>
                        <div className={classes.textRight}>
                            <Typography className={classes.copyRightText}>
                                Made with <HeartIcon className={classes.heartIcon} /> by Arslan Sajid in 2020.
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
        fontSize: 16,
        position: 'relative',
        top: '2px'
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
    textRight: {
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
        width: 55,
        height: 65,
        margin: 10
    },
    fbButton: {
        background: Colors.fb,
    },
    githubButton: {

    },
    liButton: {
        background: Colors.linkedin
    }
}));

export default Footer;
