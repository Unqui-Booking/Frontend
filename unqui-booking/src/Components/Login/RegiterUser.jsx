import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, Grid, IconButton, InputAdornment, Button, TextField, Avatar } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
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
        width: '',
        margin: '20px',
    },
    nameMail: {
        display: 'flex',
        flexFlow: 'column',
        width: '100%',
    },
    passwords: {
        /* display: 'flex',
        flexFlow: 'row',
        wrap: 'wrap' */
    },
    allWidth: {
        width: '100%'
    }
  }));

const RegiterUser = () => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        
        <Container maxWidth="md">
            <Grid container spacing={3} className={classes.container}>
                <Avatar alt="Remy Sharp" src={logo} className={classes.avatar} />
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                            <Grid item className={classes.nameMail} sm={12}>
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="Nombre y apellido"
                                    className={classes.textFild}
                                />
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="E-mail"
                                    className={classes.textFild}
                                />
                            </Grid>
                            <Grid container className={classes.passwords} sm={12} xs={12}>
                               
                                <Grid item sm={6} xs={12}>
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
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Repetir contraseña"
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
                                </Grid>
                            </Grid>

                            <Button variant="contained" color="primary" className={classes.textFild}>
                                Registrarse
                            </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Container> 
    )
}

export default RegiterUser;