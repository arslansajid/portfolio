import React from "react";
import Marquee from "react-fast-marquee";
import Technologies from "../static/Technologies"
import { makeStyles } from '@material-ui/core';

const Block = ({ name, imgUrl, className }) => (
    <div className={className}>
        <img alt={name} src={imgUrl} />
    </div>
)

const TechMarquee = () => {
    const classes = useStyles();

    return (
        <div className={classes.marqueeContainer}>
            <Marquee speed={50}>
                {Technologies.map((tech, index) => (
                    <div key={`${tech.name}_${index}`}>
                        <Block className={classes.block} name={tech.name} imgUrl={tech.image} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
};



const useStyles = makeStyles((theme) => ({
    marqueeContainer: {
        padding: "2em 0",
    },
    block: {
        width: 70,
        height: 70,
        padding: "10px 30px",

        [theme.breakpoints.down('sm')]: {
            width: 50,
            height: 50,
            padding: "10px 20px",
        },

        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "contain",
        }
    },
}));

export default TechMarquee;