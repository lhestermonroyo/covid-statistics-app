import React from 'react'
import { withStyles, AppBar, Toolbar, Button, Container, IconButton } from '@material-ui/core';
import { BlurCircular } from '@material-ui/icons';
import styles from './styles';

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Container>
          <Toolbar>
            <div className={classes.logo}>
              <BlurCircular fontSize="large" style={{ color: '#FF808B' }} />
              <p style={{ marginLeft: 6 }}>CovidStats</p>
            </div>
            <div className={classes.grow} />
            <Button color="primary" href="/#">Overview</Button>
            <Button color="primary" href="/#/countries">Countries</Button>
            <Button color="primary" href="/#/health-info">Health Info</Button>
            {/* <IconButton color="primary"><AccountCircle /></IconButton> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header);
