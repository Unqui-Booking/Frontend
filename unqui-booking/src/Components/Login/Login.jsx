import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, Grid, IconButton, InputAdornment, Button, TextField, Avatar, FormHelperText } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../../Img/logo.png';
import { Link } from 'react-router-dom';

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

const Login = () => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    const history = useHistory();
    
    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const login = () => {
        history.push("/home");
    }

    const goToRegister = () => {
        history.push("/register");
    }

    return (
        
        <Container maxWidth="md">
            <Grid container spacing={3} className={classes.container}>
                <Avatar alt="Remy Sharp" src={logo} className={classes.avatar} />
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
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

                            <Button variant="contained" color="primary" onClick={login} className={classes.textFild}>
                                Ingresar
                            </Button>
                            <Link href="#" onClick={goToRegister}>Registrarse</Link>
                    </CardContent>
                </Card>
            </Grid>
        </Container> 
    )
}

export default Login;