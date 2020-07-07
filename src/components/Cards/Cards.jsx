import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";

const Cards = (props) => {
  console.log(props);

  return (
    <div className={styles.module}>
      <Grid container spacin={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterButtom>
              Infected
            </Typography>
            <Typography variant="h5" gutterButtom>
              Data
            </Typography>
            <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterButtom>
              Recovered
            </Typography>
            <Typography variant="h5" gutterButtom>
              Data
            </Typography>
            <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="body2">
              Number of recovered cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterButtom>
              Deaths
            </Typography>
            <Typography variant="h5" gutterButtom>
              Data
            </Typography>
            <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="body2">
              Number of deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
