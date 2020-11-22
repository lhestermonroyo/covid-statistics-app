import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Grid, Typography, useTheme, withStyles } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import MainContainer from '../../components/MainContainer';
import Loading from '../../components/Loading';
import { getSummaryGlobal, clearOverviewStates } from '../../actions/overviewActions';
import styles from './styles';

const Overview = (props) => {
  const { classes } = props;
  const theme = useTheme();
  const { loading, overviewData } = useSelector(state => state.overview);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSummaryGlobal());

    return () => dispatch(clearOverviewStates());
  }, []);

  const { Global, Date } = overviewData;
  console.log(overviewData);
  return (
    <MainContainer>
      <Typography variant="h2">Overview</Typography>
      {loading && <Loading />}
      {Global &&
        <Card className={classes.globalCard}>
          <CardContent>
            <Typography variant="h4" color="primary">Global Stats</Typography>
            <Typography variant="body2" color="textSecondary" className={classes.globalDate}>as of <strong>{Moment(Date).format('MMMM DD, YYYY')}</strong></Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="h2" color="primary" align="center"><NumberFormat value={Global.NewConfirmed} displayType="text" thousandSeparator={true} renderText={value => value} /></Typography>
                <Typography variant="h6" align="center" color="textSecondary">New Confirmed</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h2" color="primary" align="center"><NumberFormat value={Global.NewDeaths} displayType="text" thousandSeparator={true} renderText={value => value} /></Typography>
                <Typography variant="h6" align="center" color="textSecondary">New Deaths</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h2" color="primary" align="center"><NumberFormat value={Global.NewRecovered} displayType="text" thousandSeparator={true} renderText={value => value} /></Typography>
                <Typography variant="h6" align="center" color="textSecondary">New Recovered</Typography>
              </Grid>
              <div style={{ width: '100%', height: 1, background: '#E6E6E6', margin: theme.spacing(3, 0) }} />
              <Grid item xs={4}>
                <Typography variant="h2" color="primary" align="center"><NumberFormat value={Global.TotalConfirmed} displayType="text" thousandSeparator={true} renderText={value => value} /></Typography>
                <Typography variant="h6" align="center" color="textSecondary">Total Confirmed</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h2" color="primary" align="center"><NumberFormat value={Global.TotalDeaths} displayType="text" thousandSeparator={true} renderText={value => value} /></Typography>
                <Typography variant="h6" align="center" color="textSecondary">Total Deaths</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h2" color="primary" align="center"><NumberFormat value={Global.TotalRecovered} displayType="text" thousandSeparator={true} renderText={value => value} /></Typography>
                <Typography variant="h6" align="center" color="textSecondary">Total Recovered</Typography>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      }
    </MainContainer>
  )
}

export default withStyles(styles)(Overview);

