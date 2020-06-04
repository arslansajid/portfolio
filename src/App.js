import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpertiseCard from './components/ExpertiseCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import WorkTogether from './components/WorkTogether';
import Colors from './styles/Colors';

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <Container >
        {/* Expertise Section goes here */}
        <Grid
          className={`${classes.textCenter} ${classes.section}`}
        >
          <Typography className={classes.heading}>
            My Expertise
          </Typography>
          <div className={classes.border} />
          <Typography className={classes.description}>
            I've got my hands dipped in all phases of the design process
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.section}
          // lg={12} md={12} sm={12} xs={12}
          justify="center"
          align="center"
        >
          <Grid
            lg={4} md={6} sm={12} xs={12}
            item
          >
            <ExpertiseCard
              icon={"web"}
              heading={"Web Apps Development"}
              description={"I design in the browser with HTML(5), CSS(3) and JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too."}
            />
          </Grid>
          <Grid
            lg={4} md={6} sm={12} xs={12}
            item
          >
            <ExpertiseCard
              icon={"mobile"}
              heading={"Mobile Apps Development"}
              description={"I design in the browser with HTML(5), CSS(3) and JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too."}
            />
          </Grid>
          <Grid
            lg={4} md={6} sm={12} xs={12}
            item
          >
            <ExpertiseCard
              icon={"code"}
              heading={"Competitive Coding"}
              description={"I also enjoy doing competitive coding and have a great algorithmic and data structures knowledge"}
            />
          </Grid>
        </Grid>

        {/* Experience Section goes here */}
        <Grid
          className={`${classes.textCenter} ${classes.section}`}
        >
          <Typography className={classes.heading}>
            Professional Experience
          </Typography>
          <div className={classes.border} />
          <Typography className={classes.description}>
            I've got more than 2 years of experience in software development.
          </Typography>

          <Grid
            container
            className={classes.section}
            spacing={2}
          >
            <ExperienceCard
              company={"Graana Group of Companies"}
            />

            <ExperienceCard
              company={"Roomy.pk"}
            />

            <ExperienceCard
              company={"CARE Private Limited"}
            />
          </Grid>
        </Grid>

        {/* Project Section goes here */}
        <Grid
          className={`${classes.textCenter} ${classes.section}`}
        >
          <Typography className={classes.heading}>
            Projects
          </Typography>
          <div className={classes.border} />
          <Typography className={classes.description}>
            I've got more than 2 years of experience in software development.
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.section}
          // lg={12} md={12} sm={12} xs={12}
          // spacing={3}
          // justify="center"
        >
          <Grid
            lg={4} md={6} sm={6} xs={12}
            item
          >
            <ProjectCard
              title={"Graana Admin"}
            />
          </Grid>
          <Grid
            lg={4} md={6} sm={6} xs={12}
            item
          >
            <ProjectCard
              title={"Sneaker-Log"}
            />
          </Grid>
          <Grid
            lg={4} md={6} sm={6} xs={12}
            item
          >
            <ProjectCard
              title={"EASY-Q"}
            />
          </Grid>
        </Grid>

      </Container>
      <WorkTogether />
      <Footer />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  section: {
    margin: "70px 0 70px 0"
  },
  heading: {
    fontSize: "2.25em",
    fontWeight: 600,
    lineHeight: "40px",
    marginBottom: "20px",
  },
  description: {
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "32px",
    color: Colors.textGrey
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
})
);
export default App;
