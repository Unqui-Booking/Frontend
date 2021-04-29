import React from 'react'
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


const Desk = () => {

    const classes = useStyles();
    var date = new Date();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" > 
            <Grid item xs={12} justify="center" className={classes.flex}>
                <Button variant="contained" color="default">
                    <img src={imgDesk} />
                </Button>
            </Grid>
        </Grid>
        </Container>
        
    )
}
 
export default Desk