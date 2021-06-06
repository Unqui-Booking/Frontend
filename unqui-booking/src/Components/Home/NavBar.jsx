import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, AppBar, Toolbar, Typography } from  '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setFailedLogin } from '../../Actions/userActions';
import { getBookingsByUser, getHistoricalBookingsByUser, getCurrentsBookingsByUser } from '../../Actions/bookingActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({
  userReducer: {
    user
  },
  bookingReducer: {

  },
  setFailedLogin,
  getBookingsByUser,
  getHistoricalBookingsByUser,
  getCurrentsBookingsByUser

}) => {

  const classes = useStyles();
  let history = useHistory(); 

  const handleLogOut = () => {
    setFailedLogin(false);
    history.push("/");
  }

  const handleProfile = () => {
    getHistoricalBookingsByUser(user.id);
    getCurrentsBookingsByUser(user.id);
    history.push("/student");
  }
  
    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            UNQui-Booking
          </Typography>
          
          {user != undefined ?
            <div>
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
            </div> : null
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );

}

const mapStateToProps = state => ({
  userReducer: state.userReducer,
  bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { setFailedLogin, getBookingsByUser, getHistoricalBookingsByUser, getCurrentsBookingsByUser })(NavBar)