import React from 'react'
import { Grid, Container, Button} from '@material-ui/core'
import Nav from 'react-bootstrap/Nav';
import { makeStyles } from '@material-ui/core/styles'
import imgDesk from '../../Img/desk.png'

const useStyles = makeStyles((theme) => ({
      flex: {
          display: "flex",
      },
      title: {
        padding: "2rem",
        textAlign: "center",
      },
      
}))


const Desk = (props) => {

    const classes = useStyles();
    const desk = props.desk

    const handleClick = () => {
        console.log("escritorio seleccionado")
    }

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" > 
            <Grid item xs={12} justify="center" className={classes.flex}>
                <Button variant="contained" color="default" className={classes.box} onClick={handleClick}>
                    <img src={imgDesk} />
                </Button>
            </Grid>
        </Grid>
        </Container>
        
    )
}
 
export default Desk