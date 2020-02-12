
import React from "react";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.jsx";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

    
  
  return (
    <>
    <Header />
    
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><img width="150px" height="100px" alt="..."src={require("assets/img/theme/ambassador.png")}/></Paper>
         
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>hdgchetd
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>

    </>
  );
}


// export default Mapi;
