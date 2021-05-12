import React, { useEffect, useImperativeHandle } from 'react'
import { Grid, Container, Button, Chip} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import imgDesk from '../../Img/desk.png'

const useStyles = makeStyles((theme) => ({
    flex: {
        display: "flex",
        flexFlow: 'column',
    },
    title: {
        padding: "2rem",
        textAlign: "center",
    },
    box: {
        display: 'flex',
        margin: theme.spacing(1),
        boxShadow: 'none',
        backgroundColor: 'transparent',
        
    },
    chip: {
        border: '1px solid #d5d5d5',
        textTransform: 'capitalize',
        color: '#000000ad',
        fontSize: '0.8rem',
    }
}))


const Desk = (props) =>{

    const classes = useStyles();
    const {desk, setSelectedDesk, getChairByDesk} = props 
    
    
    const handleClick = () => {        
        setSelectedDesk(desk);
        getChairByDesk(desk.id);
      }

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" spacing={2}> 
                <Grid item xs={12} justify="center" className={classes.flex}>
                    <Button variant="contained"  color="default"  onClick={() => handleClick()} className={classes.box} >
                        <Grid className={classes.flex}>
                            <img src={imgDesk} id={desk.id}/>
                            <Chip size="small" label={desk.nameDesk} color="default" variant="outline" className={classes.chip} />
                        </Grid>
                    </Button>
                </Grid>
        </Grid>
        </Container>
        
    )
}
 

export default Desk;