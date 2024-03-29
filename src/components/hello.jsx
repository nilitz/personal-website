import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import Typewriter from 'typewriter-effect';
import FadeInSection from "./fadeInSection";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '25vh 0 0 0',
        height: '65vh'
    },
    hello: {
        color: theme.palette.primary.main,
        fontSize: '1.4rem',
        marginBottom: '3px',
        fontFamily: "monospace",
        "@media (max-width: 1450px)": {
            fontSize: '1.3rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '1.2rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.1rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1rem',
        }
    },
    name: {
        color: theme.palette.text.main,
        fontSize: '3.8rem',
        marginBottom: '5px',
        fontWeight: "bold",
        "@media (max-width: 1450px)": {
            fontSize: '3.1rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '2.8rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '2.2rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1.8rem',
        }
    },
    title: {
        color: theme.palette.text.main,
        opacity: 0.7,
        fontSize: '3.8rem',
        fontWeight: "bold",
        marginBottom: '2px',
        "@media (max-width: 1450px)": {
            fontSize: '3.1rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '2.6rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '2rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1.5rem',
        }
    },
    description: {
        color: theme.palette.text.main,
        opacity: 0.55,
        fontSize: '1rem',
        marginTop: '20px',
        width: '50%',
        "@media (max-width: 1150px)": {
            width: '70%',
        },
        "@media (max-width: 950px)": {
            width: '80%',
        },
        "@media (max-width: 800px)": {
            width: '100%',
            marginTop: '15px',
        }
    }
}));

function Hello() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.hello}>

                <FadeInSection waitingTime={0}>
                    <Typewriter

                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello World.')
                                .pauseFor(600)
                                .deleteChars(6)
                                .typeString("You.")
                                .pauseFor(600)
                                .deleteAll()
                                .typeString('Welcome.')
                                .start();
                        }}
                    />
                </ FadeInSection>

            </div>
            <FadeInSection waitingTime={100}>
            <div className={classes.name}>
                Hugo De Grossi.
            </div>
            </ FadeInSection>
            <FadeInSection waitingTime={250}>
            <div className={classes.title}>
                4th Year IT Engineering student.
            </div>
            </ FadeInSection>
            <FadeInSection waitingTime={500}>
            <div className={classes.description}>
                Currently applying for an IT internship in the web developement sector, however, I
                am open to any opportunity. The internship length is 19 weeks (from last week of
                september 2021 to first week of february 2022).
            </div>
            </ FadeInSection>

        </div>

    );
}

export default Hello;
