import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core';

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
                        <img
                            className={classes.icon}
                            src={require('../assets/images/fb@2x.png')}
                            alt='youtube-icon'
                        />
                        <img
                            className={classes.icon}
                            src={require('../assets/images/ig@2x.png')}
                            alt='instagram-icon'
                        />
                        <a
                            target="_blank"
                            href="https://www.fb.com/arslan.sajid.773">
                        <img
                            className={classes.icon}
                            src={require('../assets/images/fb@2x.png')}
                            alt='facebook-icon'
                        />
                        </a>
                    </div>
                </Grid>
                <Grid lg={4} md={4} sm={12} xs={12} item>
                    <div className={classes.textRight}>
                        <Typography className={classes.copyRightText}>
                            Copyright 2020. davysChess.com
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
        padding: '40px 0 40px 0',
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
}));

export default Footer;
