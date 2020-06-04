import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Typed from 'react-typed';
import Colors from '../styles/Colors';

import { makeStyles, Button } from '@material-ui/core';

const Header = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.parent}
                style={{
                    backgroundImage: `url(${require("../assets/images/landing.jpg")})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
            </div>
            <Container>
                <div className={classes.centerTextContainer}>
                    <Typography className={classes.centerText}>
                        Hi I'm Arslan &amp; I build
                        <br />
                        <Typed
                            strings={["web applications.", "mobile applications.", "e-commerce stores.", "landing pages.", "corporate websites.", "User Interfaces."]}
                            startDelay={300}
                            typeSpeed={120}
                            loop={true}
                            loopCount={Infinity}
                            fadeOut={true}
                            fadeOutClass={'typed-fade-out'}
                            fadeOutDelay={500}
                            autoInsertCss={true}
                        />
                    </Typography>
                </div>
                <div className={classes.hireBtnContainer}>
                    <div className={classes.btnsContainer}>
                    <a href="mailto:arslansajid951@gmail.com">
                    <Button
                        className={classes.hireButton}
                        size="large"
                        variant="outlined"
                        color="primary"
                    >
                        Hire Me
                    </Button>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1RlPg-swe36BAfT5DBgafeC8jpvUlac0-/view?usp=sharing">
                    <Button
                        className={classes.cvButton}
                        size="large"
                        variant="outlined"
                        color="primary"
                    >
                        Download CV
                    </Button>
                    </a>
                    </div>
                </div>
            </Container>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    centerTextContainer: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',
        color: '#FFFFFF',
        zIndex: 100,

        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    hireBtnContainer: {
        position: 'absolute',
        bottom: '40%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 100,

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            bottom: '30%',
        },
    },
    btnsContainer: {
        display: "flex",
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        bottom: '10%',
        left: '50%',

        [theme.breakpoints.down('xs')]: {
            width: '100%',
            justifyContent: "space-around"
        },
    },
    centerText: {
        fontSize: '3.75em',
        fontWeight: 600,
        lineHeight: '70px',
        zIndex: 1000,
        textAlign: 'left',

        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    parent: {
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '70vh',
        maxHeight: '999px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: 1,
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        filter: 'brightness(0.6)',
    },
    hireButton: {
        textTransform: "capitalize",
        color: "white",
        borderColor: "white",
        borderWidth: "2px",
        fontSize: "1.5em",
        fontWeight: 500,
        whiteSpace: "noWrap",
        minWidth: 200,

        "&:hover": {
            color: "black",
            borderWidth: "2px",
            borderColor: "white",
            background: "white"
        },

        [theme.breakpoints.up('sm')]: {
            marginRight: 15,
        },

        [theme.breakpoints.down('xs')]: {
            minWidth: 150
        },
    },
    cvButton: {
        textTransform: "capitalize",
        color: "white",
        borderColor: "white",
        borderWidth: "2px",
        fontSize: "1.5em",
        fontWeight: 500,
        whiteSpace: "noWrap",
        minWidth: 200,

        "&:hover": {
            color: "white",
            borderWidth: "2px",
            borderColor: Colors.appRed,
            background: Colors.appRed
        },

        [theme.breakpoints.down('xs')]: {
            minWidth: 170
        },
    }
}));

export default Header;
