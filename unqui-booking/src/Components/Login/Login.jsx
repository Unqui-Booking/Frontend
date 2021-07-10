import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, Grid, IconButton, InputAdornment, Button, TextField, Avatar, FormHelperText, FormControl, Snackbar } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../../Img/logo.png';
import { setFailedLogin, setUser } from '../../Actions/userActions'
import { Alert } from '@material-ui/lab';
import dataService from '../../Services/service';
import { USER_URL } from '../../Api/base'

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
    setUser

}) => {

    useEffect( () => {
        window.localStorage.removeItem('user');
        //setLoading(false);
    }, [])


    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    const history = useHistory();
    const [email, setEmail] = useState('');
    const[open, setOpen] = useState(successRegister);
    //const [loading, setLoading] = useState(false);

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
        let resUser;
        let res = await dataService.get(`${USER_URL}/login?mail=${email}&password=${values.password}`);
        console.log(`${USER_URL}/login?mail=${email}&password=${values.password}`);
        resUser = res.data[0];
        if(!!resUser){
            window.localStorage.setItem('user', JSON.stringify(resUser))
            setUser(resUser)
            setFailedLogin(false);
            history.push("/home");
        }else{
            setFailedLogin(true);
        }
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
                                id="input-person"
                                label="Email"
                                name="Email"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }
                                }
                                className={classes.textFild}
                                onChange={handleEmail}
                                autoComplete='off'
                            />
                            
                            <TextField
                                id="input-password"
                                label="Contraseña"
                                name="Contraseña"
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
                           
                            <Button data-testid="btn-login" variant="contained" color="primary" onClick={(event)=>login(event)} className={classes.textFild}>
                                Ingresar
                            </Button>
                            {/* <Link href="#" to={"/register"}>Registrarse</Link> */}
                            <a href='/register'>Registrarse</a>
                        </FormControl>
                        </form>    
                    </CardContent>
                </Card>
            </Grid>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
                <Alert onClose={handleClose} severity="success">
                    <strong>Usuario registrado correctamente.</strong>
                </Alert>
            </Snackbar>
        </Container> 
    )
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
  });
  
export default connect(mapStateToProps, { setFailedLogin, setUser })(Login);
