import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpertiseCard from './components/ExpertiseCard';
import WorkTogether from './components/WorkTogether';

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <Grid
          container
          className={classes.section}
          justify='center'
          alignItems='center'
          spacing={2}
        >
          <Grid
            lg={4} md={6} sm={12} xs={12}
            item
          >
            <ExpertiseCard />
          </Grid>
          <Grid
            lg={4} md={6} sm={12} xs={12}
            item
          >
            <ExpertiseCard />
          </Grid>
          <Grid
            lg={4} md={6} sm={12} xs={12}
            item
          >
            <ExpertiseCard />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.section}>
        <WorkTogether />
      </div>
      <Footer />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  section: {
    margin: "100px 0 100px 0"
  },
})
);
export default App;
