import { Card, CardContent, Typography, Divider, Grid } from '@material-ui/core';
import React from 'react'
import { FaUserLock } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerIcon: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        width: '5rem',
        height: '5rem',
    },
    containetText: {
        display: 'flex',
        alignItems: 'center',
    },
    containerIconText: {
        padding: '20px 10px',
    }

}))


const FinedStudent = (props) => {

    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Card>
            <CardContent>
                <Typography variant='h6' className={classes.title}>Usuario multado</Typography>
                <Divider></Divider>
                <Grid container spacing={2} className={classes.containerIconText}>
                    <Grid item xs={3} sm={3} className={classes.containerIcon}>
                        <FaUserLock className={classes.icon}/>
                    </Grid>
                    <Grid item xs={9} sm={9}>
                        <Typography>
                            Tu usuario se encuentra limitado para realizar reservas hasta el día <strong>{props.dateLimit}</strong> inclusive.<br/>
                            En tu perfil podes acceder normalmente a la información detallada allí.
                        </Typography> 
                    </Grid>
                </Grid>
            </CardContent>     
        </Card>
        </Grid>
        
    )
}

export default FinedStudent;