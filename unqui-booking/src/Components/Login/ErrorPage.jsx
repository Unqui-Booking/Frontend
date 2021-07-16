import React from 'react';
import { Button, Grid, CardContent, Typography, Divider, Card } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        marginTop: '16rem',
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        margin: '20px 0px'
    },
    content: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '4rem',
        height: '4rem'
    }
    
  }));


const ErrorPage = (props) => { 
    const classes = useStyles();
    let history = useHistory(); 

    const goToLogin =  () => {
        history.push("/student");
    }
    return (
        <Grid className={classes.root}>
            <Card>
                <CardContent className={classes.content}>
                    <ReportProblemIcon className={classes.icon} color='secondary' fontSize='large'/>
                    <Typography variant='h6' className={classes.message} data-testid='page-error'>{props.message}</Typography>
                    <Button variant="contained" color="primary" onClick={()=>goToLogin()}>Volver al inicio</Button>
                </CardContent>     
            </Card>
        </Grid>
    );
}


export default ErrorPage;