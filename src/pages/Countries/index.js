import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, Typography, Card, CardContent, Button } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import MainContainer from '../../components/MainContainer';
import Loading from '../../components/Loading';
import { getCountries } from '../../actions/contriesActions';
import styles from './styles';

const Countries = (props) => {
  const { classes } = props;
  const { loading, alert, countries } = useSelector(state => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const columns = [
    {
      name: "number",
      label: "#",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Country",
      label: "Country Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Slug",
      label: "Slug",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "ISO2",
      label: "ISO2",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "options",
      label: "Options",
      options: {
        filter: false,
        sort: false,
      }
    }
  ];

  const options = {
    print: false,
    download: false,
    pagination: true,
    selectableRows: false
  };

  return (
    <MainContainer>
      <Typography variant="h2">Countries</Typography>
      {loading && <Loading />}
      {countries &&
        <Card className={classes.countriesTableCard}>
          <MUIDataTable
            data={countries.map((country, i) => {
              return [
                i + 1,
                country.Country,
                country.Slug,
                country.ISO2,
                <Button color="primary">More</Button>
              ]
            })}
            columns={columns}
            options={options} />
        </Card>}
    </MainContainer>
  )
}

export default withStyles(styles)(Countries);
