import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { GiOfficeChair } from 'react-icons/gi';
import { Grid, Button, Chip } from '@material-ui/core';
import { setSelectedSeat } from '../../../Actions/chairActions';
import { setActiveStep } from '../../../Actions/alertMessageActions';

const useStyles = makeStyles((theme) => ({

    flex: {
        display: "flex",
    },
    column: {
        display: "flex",
        flexFlow: 'column',
        alignItems: 'center',
    },
    sizeTable: {
        height: '4rem',
        width: '4rem',
    },
    desk: {
        border: '3px #967a44 outset',
        height: '60px',
        backgroundColor: '#f5ce85',
        margin: '1rem 0'
    },
    text:{
        textAlign: 'center',
        color: '#6b6b6b',
    },
    chairTop: {
        display: "flex",
    },
    chairBottom: {
        display: "flex",
        justifyContent: "flex-end",
    },
    box: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
    chip: {
        border: '1px solid #d5d5d5',
        textTransform: 'capitalize',
        color: '#000000ad',
        fontSize: '0.8rem',
    },
    chairNoDisabled: {
        height: '4rem',
        width: '4rem',
    },
    chairDisabled: {
        height: '4rem',
        width: '4rem',
        color: "#d5d5d5",
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
  }));

const SelectChair = ({
    bookingReducer: {
        mapAvailabilySeats,
    },
    setSelectedSeat,
    setActiveStep }) => {

    const classes = useStyles();

    const handleClick = (seatid, available) => {
        if(available){
            setSelectedSeat(seatid);
            setActiveStep(1);
        }
    }

    const getStyleBox = (available) => {
        if(!available){
            return classes.noBoxAviabled;
        }else{
            return classes.box
        }
    }

    const getStyleChair = (available) => {
        if(!available){
            return classes.chairDisabled
        }else{
            return classes.chairNoDisabled
        }
    }

    return (
        <Grid container justifyContent="center" className={classes.flex}>
            
            <Grid item xs={12} sm={12} justifyContent="center" className={classes.flex}>
                {mapAvailabilySeats.map((cl) => (
                    <Grid xs={2} className={classes.chairTop}>
                        <Button variant="contained"  color="default" onClick={() => handleClick(cl[0], cl[1])} className={getStyleBox(cl[1])}>
                        <Grid className={classes.column}>
                            <Chip size="small" label={cl[0]} color="default" variant="outline" className={classes.chip} />
                            <GiOfficeChair className={getStyleChair(cl[1])} key={cl[0]}/>
                        </Grid>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} sm={12} className={classes.desk}>
                <p className={classes.text}>[ Escritorio seleccionado ]</p>
            </Grid> 
            <Grid item xs={12} sm={12} justifyContent="center" className={classes.flex}> 
                {mapAvailabilySeats.map((cr) => (
                    <Grid xs={2} justifyContent="center" className={classes.chairBottom}>
                        <Button variant="contained"  color="default"  onClick={() => handleClick(cr[0], cr[1])} className={getStyleBox(cr[1])}>
                            <Grid className={classes.column}>
                                <GiOfficeChair className={getStyleChair(cr[1])} key={cr[0]}/>
                                <Chip size="small" label={cr[0]} color="default" variant="outline" className={classes.chip} />
                            </Grid>    
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    ) 
}

const mapStateToProps = state => ({
    bookingReducer: state.bookingReducer,
});

export default connect(mapStateToProps, { setSelectedSeat, setActiveStep })(SelectChair)