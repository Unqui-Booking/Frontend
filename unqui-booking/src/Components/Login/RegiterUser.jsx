import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, Grid, IconButton, InputAdornment, Button, TextField, Avatar, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import logo from '../../Img/logo.png';

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
        width: '328px',
        margin: '20px',
    },
    nameMail: {
        display: 'flex',
        flexFlow: 'column',
        width: '100%',
    },
  }));

const RegiterUser = () => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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

    const getvalues = () => {
        //return name.length == 0 || email.length == 0 || values.password.length == 0 ;
        return !validateName() || !validateEmail() || !validatePassword() ;
    }
    
    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const validateName = () => {
        let exp = /^(?=.*\d)/;
        return name.length > 3 && name.split(' ').length >=2 && name.split('').length == name.length && !exp.test(name); 
    }

    const showTextHelperName = () => {
        let text = '';
        !validateName() ? text = "Ingrese un nombre válido" : text= '';
        return text;
    }

    const validateEmail = () => {
        return (email.substr(email.length - 19) == "@alu.edu.unq.com.ar") && email.length > 19;
    }

    const showTextHelperEmail = () => {
        let text = '';
        !validateEmail() ? text = "Ingrese su email finalizado en @alu.edu.unq.com.ar" : text= '';
        return text;

    }

    const validatePassword = () => {
        let correctPassword;
        let exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}/;
        exp.test(values.password) ? correctPassword = true : correctPassword = false;
        return correctPassword;
    }
 
    const showTextHelperPassword = () => {
        let text = '';
        !validatePassword() ? text = 'Requisitos: entre 8 y 15 caracteres, al menos un número, al menos una mayúscula y al menos una minúscula' : text = '';
        return text;
    }

    const saveUser = () => {
        //save user
        history.push("/");
    }

    return (
        
        <Container maxWidth="md"> 
            <Grid container spacing={3} className={classes.container}>
                <Avatar alt="Remy Sharp" src={logo} className={classes.avatar} />
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <FormControl >
                            <Grid item className={classes.nameMail} sm={12}>
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="Nombre y apellido"
                                    className={classes.textFild}
                                    helperText= {showTextHelperName()}
                                    value={name}
                                    onChange={handleName}
                                />
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="Email"
                                    className={classes.textFild}
                                    helperText= {showTextHelperEmail()}
                                    value={email}
                                    onChange={handleEmail}
                                    
                                />
                            </Grid>
                            <Grid item sm={12} xs={12}>
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
                                    helperText= {showTextHelperPassword()}
                                />
                            </Grid>
                            <Button variant="contained" color="primary" onClick={saveUser} className={classes.textFild} disabled={getvalues()}>
                                Registrarse
                            </Button>
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
        </Container> 
    )
}

export default RegiterUser;