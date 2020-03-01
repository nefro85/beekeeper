import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Button, Typography, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import HiveGrid from './elements/HiveGrid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <Container>

      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Beekeepr</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <HiveGrid>
      </HiveGrid>
    </Container>
  );
}

export default App;
