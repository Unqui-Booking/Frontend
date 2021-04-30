import React from 'react'
import { Grid, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Desk from './Desk'

const useStyles = makeStyles((theme) => ({
      flex: {
          display: "flex",
      },
      title: {
        padding: "2rem",
        textAlign: "center",
      },
      margin: {
        margin: "1rem",
      },
      titleArea: {
          textAlign: "center",
      },
}))

const AreaDesk = (props) => {

    const classes = useStyles();
    return (
        <Grid container justify="center" className={classes.flex}>  
            <Grid xs={12} className={classes.titleArea}>
                <Typography variant='h5' > {props.title} </Typography>    
            </Grid>         
            {props.listDesk.map((d)=>(
                <Grid item xs={2} className={classes.margin}>
                    <Desk />
                </Grid>
            ) )} 
        </Grid>  
    )
}

export default AreaDesk