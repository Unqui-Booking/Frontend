import React, { useEffect, useImperativeHandle } from 'react'
import { Grid, Container, Button} from '@material-ui/core'
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


const Desk = (props) =>{

    const classes = useStyles();
    const {desk, setSelectedDesk, deskSelected} = props 
    
    
    const handleClick = (e) => {
        const buttonElement = e.target.parentElement.parentElement

        buttonElement.style.backgroundColor = 'green'
        
        setSelectedDesk(desk)
        console.log(buttonElement);
      }
 
    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" > 
            <Grid item xs={12} justify="center" className={classes.flex}>
                <Button variant="contained"  color="default"  onClick={(e) => handleClick(e)}>
                    <img src={imgDesk} id={desk}/>
                </Button>
            </Grid>
        </Grid>
        </Container>
        
    )
}
 

export default Desk;