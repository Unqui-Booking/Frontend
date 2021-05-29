import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, AppBar, Toolbar, Typography } from  '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
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

const NavBar = (props) => {

  const classes = useStyles();
  const history = useHistory(); 

  const handleLogOut = () => {
    console.log("SALIR")
  }

  const handleProfile = () => {
    console.log("profile")
  }
  
    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            UNQui-Booking
          </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfile}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleLogOut}
              color="inherit"
            >
              <ExitToAppIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default NavBar
