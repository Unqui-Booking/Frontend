import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Button, Chip } from '@material-ui/core';
import imgDesk from '../../../Img/desk.png';

const useStyles = makeStyles((theme) => ({
    flex: {
        display: "flex",
        flexFlow: 'column',
    },
    title: {
        padding: "2rem",
        textAlign: "center",
    },
    boxAviabled: {
        display: 'flex',
        margin: theme.spacing(1),
        boxShadow: 'none',
        backgroundColor: 'transparent',
        
    },
    noBoxAviabled: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'transparent',
            cursor: "default",
          }
    },
    chip: {
        border: '1px solid #d5d5d5',
        textTransform: 'capitalize',
        color: '#000000ad',
        fontSize: '0.8rem',
    },
    disabledDesk: {
        filter: 'brightness(50%)',
    }
}))


const Desk = (props) =>{

    const classes = useStyles();
    const { desk, setSelectedDesk, getChairByDesk, setActiveStep, getMapAvailabilySeats, date, startTime, endTime } = props 
    
    const handleClick = (available) => {      
        if(available){
            setSelectedDesk(desk);
            getChairByDesk(desk.id);
            setActiveStep(0);
            getMapAvailabilySeats(desk.id, moment(date).format().split('T')[0], startTime, endTime);
        }          
      }

    const getStyleDesk = (available) => {
        if(!available){
            return classes.disabledDesk;
        }
    }

    const getStyleBox = (available) => {
        if(!available){
            return classes.noBoxAviabled;
        }else{
            return classes.boxAviabled
        }
    }

    return (
        <Container maxWidth="md">
            <Grid container className={classes.root} justify="center" spacing={2}> 
                <Grid item xs={12} justify="center" className={classes.flex}>
                    <Button variant="contained"  color="default"  onClick={() => handleClick(desk.availableDesk)} className={getStyleBox(desk.availableDesk)}>
                        <Grid className={classes.flex}>
                            <img src={imgDesk} id={desk.id} className={getStyleDesk(desk.availableDesk)}/>
                            <Chip size="small" label={desk.nameDesk} color="default" variant="outline" className={classes.chip} />
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
 
export default Desk;