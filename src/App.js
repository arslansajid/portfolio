import React, { useEffect } from 'react';
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
import ContactButtons from './components/ContactButtons';
import Marquee from "./components/Marquee";
import Colors from './styles/Colors';
import Projects from './static/Projects';
import Companies from './static/Companies';
import { analytics } from "./firebase";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselResponsive, isDesktop } from './utils/carouselConfig';

const App = () => {

  useEffect(() => {
    analytics.logEvent("page_view" /*, { name: 'lever_puzzle' } */);
  }, [])

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
              description={"I develop for the web with JavaScript, HTML(5), CSS(3), SASS and SCSS. I love coding things from scratch, and have professional experience with front-end frameworks like React.Js, Next.Js and Gatsby."}
            />
          </Grid>
          <Grid
            lg={4} md={6} sm={12} xs={12}
            item
          >
            <ExpertiseCard
              icon={"mobile"}
              heading={"Mobile Apps Development"}
              description={"I design and develop native mobile applications for Android and iOS. I have expertise in developing mobile apps using react-native."}
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
            I've got more than 4 years of experience in software development.
          </Typography>

          <Grid
            container
            className={classes.section}
            spacing={2}
          >
            {
              Companies.map((company, index) => (
                <ExperienceCard
                  key={index}
                  company={company.name}
                  designation={company.designation}
                  location={company.location}
                  duration={company.duration}
                  logo={company.logo}
                  responsibilities={company.responsibilities}
                />
              ))
            }
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
            Here are some of the projects that I have done for clients all around the world.
          </Typography>
        </Grid>
        {isDesktop
          ?
          <Grid
            container
            className={classes.section}
          >
            {
              Projects.map((project, index) => {
                return (
                  <Grid
                    lg={4} md={6} sm={6} xs={12}
                    item
                    key={index}
                  >
                    <ProjectCard
                      title={project.title}
                      completionDate={project.completed}
                      github={project.github}
                      githubLink={project.githubLink}
                      website={project.website}
                      websiteLink={project.websiteLink}
                      image={project.image}
                      description={project.description}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
          :
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={CarouselResponsive}
            ssr={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={1000}
          >
            {
              Projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    completionDate={project.completed}
                    github={project.github}
                    githubLink={project.githubLink}
                    website={project.website}
                    websiteLink={project.websiteLink}
                    image={project.image}
                    description={project.description}
                  />
                )
              })
            }
          </Carousel>
        }
      </Container>
      <Marquee />
      <WorkTogether />
      <Footer />
      <ContactButtons />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  section: {
    margin: "2em 0"
  },
  heading: {
    fontSize: theme.spacing(4),
    fontWeight: 600,
    lineHeight: "40px",
    marginBottom: theme.spacing(2),
    textAlign: 'center'
  },
  description: {
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "32px",
    color: Colors.textGrey,
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
