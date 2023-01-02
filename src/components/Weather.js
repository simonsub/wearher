import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import LocalInfo from "./LocalInfo";
import Today from "./Today";
import Weekly from "./Weekly";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
    padding: 15,
  },
  card: {
    padding: theme.spacing(2),
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingTop: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
  },
}));

function Weather({ today, weekly }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <LocalInfo today={today} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.section}>
            <Today today={today} />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.section}>
            <Weekly weekData={weekly} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Weather;
