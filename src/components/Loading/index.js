import React from 'react';
import { CircularProgress, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const Loading = (props) => {
  const { classes } = props;
  return (
    <div className={classes.loadingContainer}>
      <Typography align="center" color="primary" variant="h5" className={classes.loadingLabel}>Loading, please wait...</Typography>
      <CircularProgress color="primary" variant="indeterminate" />
    </div>
  )
}

export default withStyles(styles)(Loading);
