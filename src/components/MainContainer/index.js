import React from 'react'
import { withStyles, Container } from '@material-ui/core';
import styles from './styles';


const MainContainer = (props) => {
  const { children, classes } = props;
  return (
    <Container className={classes.container}>
      {children}
    </Container>
  )
}

export default withStyles(styles)(MainContainer)
