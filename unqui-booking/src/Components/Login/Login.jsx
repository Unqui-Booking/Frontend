import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, Grid, IconButton, InputAdornment, Button, TextField, Avatar, FormHelperText, FormControl, Snackbar } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../../Img/logo.png';
import { Link } from 'react-router-dom';
import { setFailedLogin, getUser } from '../../Actions/userActions'
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    },
    avatar: {
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        width: '120px',
        height: '120px',
        marginTop: '50px',
    },
    card: {
        margin: '-55px',
        paddingTop: '30px',
        width: '550px',
    },
    cardContent: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    },
    textFild: {
        width: '290px',
        margin: '20px',
    }
  }));

const Login = ({
    userReducer: { 
        successRegister,
        failedLogin
    },
    setFailedLogin,
    getUser,

}) => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    const history = useHistory();
    const [email, setEmail] = useState('');
    const[open, setOpen] = useState(successRegister);

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const login = async (event) => {
        event.preventDefault();
        let resUser = await getUser(email, values.password);
        if(typeof resUser == 'object'){
            setFailedLogin(false);
            history.push("/home");
        }else{
            setFailedLogin(true);
        }
    }

    const goToRegister = () => {
        history.push("/register");
    }

    const handleEmail = (event) => {
        setEmail(event.target.value.trim());
    }

    return (
        
        <Container maxWidth="md">
            <Grid container spacing={3} className={classes.container}>
                <Avatar alt="Remy Sharp" src={logo} className={classes.avatar} />
                <Card className={classes.card}>
                    <CardContent>
                        <form>
                        <FormControl className={classes.cardContent}>
                            <TextField
                                id="input-with-icon-textfield"
                                label="Email"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                className={classes.textFild}
                                onChange={handleEmail}
                                autoComplete='off'
                            />
                            
                            <TextField
                                id="input-with-icon-textfield"
                                label="Contraseña"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                className={classes.textFild}
                            />
                            { failedLogin ?
                                 <FormHelperText>Usuario o contraseña incorrectos</FormHelperText> : null
                            }
                           
                            <Button variant="contained" color="primary" onClick={(event)=>login(event)} className={classes.textFild}>
                                Ingresar
                            </Button>
                            <Link href="#" onClick={goToRegister}>Registrarse</Link>
                        </FormControl>
                        </form>    
                    </CardContent>
                </Card>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
                <Alert onClose={handleClose} severity="success">
                    Usuario registrado correctamente.
                </Alert>
            </Snackbar>
        </Container> 
    )
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
  });
  
  export default connect(mapStateToProps, { setFailedLogin, getUser })(Login)