import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, Grid, IconButton, InputAdornment, Button, TextField, Avatar, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import logo from '../../Img/logo.png';
import { registerUser, setFailedLogin } from '../../Actions/userActions';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';

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

const RegiterUser = ({
    userReducer: {
        error
    },
    registerUser,
    setFailedLogin

}) => {

    useEffect( () => {
        window.localStorage.removeItem('user');
    }, [])

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

    const getValidations = () => {
        return !validateName() || !validateEmail() || !validatePassword() ;
    }
    
    const handleName = (event) => {
        setName(event.target.value.trim());
    }

    const handleEmail = (event) => {
        setEmail(event.target.value.trim());
    }

    const validateName = () => {
        let exp = /^(?=.*\d)/;
        return name.length > 3 && name.split(' ').length >=2 && !exp.test(name); 
    }

    const showTextHelperName = () => {
        let text = '';
        !validateName() ? text = "Ingrese un nombre v??lido" : text= '';
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
        !validatePassword() ? text = 'Requisitos: entre 8 y 15 caracteres, al menos un n??mero, al menos una may??scula y al menos una min??scula' : text = '';
        return text;
    }

    const saveUser = async () => {
        try{
            let newUser = await registerUser(name, email, values.password);
            if(newUser){
                setFailedLogin(false);
                history.push("/");
            }else{
                console.log("no se pudo registrar el usuario");
            }
        }catch(error){
            alert("error en register")
        }
        
        
    }

    const goToLogin = () => {
        setFailedLogin(false);
    }

    return (
        
        <Container maxWidth="md"> 
            { !(error != null && error.response.data.status == 400) ?
                <Grid container spacing={3} className={classes.container}>
                    <Avatar alt="Remy Sharp" src={logo} className={classes.avatar} />
                    <Card className={classes.card}>
                        <CardContent>
                            <FormControl className={classes.cardContent}>
                                <TextField
                                    id="input-name"
                                    label="Nombre y apellido"
                                    name="Nombre y apellido"
                                    className={classes.textFild}
                                    helperText= {showTextHelperName()}
                                    value={name}
                                    onChange={handleName}
                                    autoComplete='off'
                                    data-testid='name-register'
                                />
                                <TextField
                                    id="input-email"
                                    label="Email"
                                    name='Email'
                                    className={classes.textFild}
                                    helperText= {showTextHelperEmail()}
                                    value={email}
                                    onChange={handleEmail}
                                    autoComplete='off'
                                    data-testid='mail-register'
                                />
                                <TextField
                                    id="input-passqord-register"
                                    label="Contrase??a"
                                    name="Contrase??a"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    data-testid='password-register'
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
                                <Button data-testid='button-register' variant="contained" color="primary" onClick={saveUser} className={classes.textFild} disabled={getValidations()}>
                                    Registrarse
                                </Button>
                                {/* <Link href="#" onClick={goToLogin} to={"/"}></Link> */}
                                <a href='/' onClick={goToLogin} >Ya tengo una cuenta</a>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>:
                <ErrorPage message={"El mail ingresado ya existe"}/> 
            }
            
        </Container> 
    )
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
});

export default connect(mapStateToProps, { registerUser, setFailedLogin })(RegiterUser)