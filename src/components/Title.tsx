import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { convertToRepresentation } from '../util/numericUtil';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function Title({ selectedSecurity }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="flex-start">
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              {selectedSecurity.securityName} ({selectedSecurity.symbol})
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5">
              {selectedSecurity.lastSale}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-start">
          <Grid item>
            <div className={classes.section2}>
              <Typography gutterBottom variant="body1">
                Market Cap {convertToRepresentation(selectedSecurity.marketCap)} (since{" "}
                {selectedSecurity.ipoYear})
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.section2}>
              <Typography color="textSecondary" variant="body2">
                {selectedSecurity.industry} ({selectedSecurity.sector})
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.section2}>
              <Button color="primary">Add to watchlist</Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
    </div>
  );
}

   