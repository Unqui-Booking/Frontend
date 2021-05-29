import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, AppBar, Toolbar, Typography } from  '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setUserLogged } from '../../Actions/userActions';

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

const NavBar = ({
  userReducer: {
    userLogged,
  },
  setUserLogged

}) => {

  const classes = useStyles();
  const history = useHistory(); 

  const handleLogOut = () => {
    setUserLogged(false);
    window.location.href = "http://localhost:3000/";
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
          
          {userLogged ?
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
});

export default connect(mapStateToProps, { setUserLogged })(NavBar)