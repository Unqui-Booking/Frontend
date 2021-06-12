import { Accordion, AccordionDetails, AccordionSummary, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography, Button, Chip } from '@material-ui/core';
import React, { useState }  from 'react'
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '@material-ui/lab/Pagination';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import GavelIcon from '@material-ui/icons/Gavel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({

    containerHistorical:{ 
        border: '1px solid #0000002b',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '2.5rem',
        padding: '9px 12px',
        margin: '4px 0px',
    },
    accordion: {
        marginTop: '12px',
    },
    accordionDetails: {
        display: 'flex',
        flexFlow: 'column',
    },
    marginTop: {
        marginTop: '16px',
    },
    marginState: {
        marginTop: '7px',
    },
    width: {
        width: '90%',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
    },
    clearFilter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    containerFilter: {
        display:'flex',
        justify:'center',
        justifyContent: 'space-evenly',
        marginBottom: '12px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        marginTop: '9px',
      },
    colorConfirmation: {
        color: '#4caf50',
    }, 
    toConfirm: {
        borderColor: '#4caf50',
        background: '#4caf5030',
        fontWeight: 'bold',
        color: 'green',
        boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    expired: {
        borderColor: '#b7002e',
        background: '#ff00001c',
        color: '#b7002e',
        fontWeight: 'bold',
        boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    toConfirmBooking: {
        border: '1px solid #4caf50',
        background: '#4caf5030',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '2.5rem',
        padding: '9px 12px',
        margin: '4px 0px',
    },
    expiredBooking: {
        border: '1px solid #b7002e',
        background: '#ff00001c',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '2.5rem',
        padding: '9px 12px',
        margin: '4px 0px',
    },
    }));

const ListBookingStudent = (props) => {

    const classes = useStyles();
    const {listBooking, listCopyBooking, setCopy, admin, confirmBooking} = props
    const [dateFilter, setDateFilter] = useState(null);
    const [deskFiltered, setDeskFiltered] = useState(null);
    const [seatFiltered, setSeatFiltered] = useState(null);
    const countPages = Math.ceil(listBooking.length / 6);
    const bookingsPerPage = 6;  
    const [page, setPage] = useState(1);

    const handleFilterDate = (date) => {
        if(date != null){
            setDateFilter(date);
            const filtrados = listBooking.filter(b => moment(b.date).isSame(date, 'day') );
            setCopy(filtrados); 
        }else{
            setCopy(listBooking);
        }
                 
    }

    const handleChangePagination = (event, newPage) => {
        setPage(newPage);
    }; 

    const handleFilterDesk = (event) => {       
        if(parseInt(event.target.value)>=0){
            setDeskFiltered(parseInt(event.target.value));
            let filtrados = listBooking.filter(b => b.seat.desk.id ==  parseInt(event.target.value));
            setCopy(filtrados);
        }else{
            setCopy(listBooking);
        }
    }

    const handleFilterSeat = (event) => {       
        if(parseInt(event.target.value)>=0){
            setSeatFiltered(parseInt(event.target.value));
            let filtrados = listBooking.filter(b => b.seat.id == parseInt(event.target.value) );
            setCopy(filtrados);
        }else{
            setCopy(listBooking);
        }
    }

    const clearFilter = () => {
        setCopy(listBooking);
        setDateFilter(null);
        setDeskFiltered("");
        setSeatFiltered("");
    }

    const getStyle = (stateBooking) => {
        if(admin){
            switch(stateBooking){
                case 'toConfirm': 
                    return classes.toConfirmBooking;
                case 'expired':
                    return classes.expiredBooking;
                default:
                    return classes.containerHistorical;        
            }
        }
        else{
            console.log("NO ADMIN")
            return classes.containerHistorical;
        }
    }

    const handleFilterState = (stateBooking) => {
        let filtrados = listBooking.filter(b => b.state ==  stateBooking);
        setCopy(filtrados);
    }

    const getDisabledConfirm = (hour) => {
        let currentHour = new Date().getHours();
        console.log("hora actual: "+currentHour);
        console.log("start time: "+ hour);
        console.log("DIFERENCIA: "+Math.abs(currentHour - hour));
        return Math.abs(currentHour - hour) > 1; 
    }

    const goToConfirmBooking = (booking) => {
        confirmBooking(booking);
    }

    return (
        <Grid container>
            <Grid container xs={12} sm={12} className={classes.containerFilter}>

                { !admin ?
                    <Grid item xs={12} sm={3} >
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <KeyboardDatePicker
                                className={classes.dateSelect}
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="filterDate"
                                value={dateFilter}
                                label="Filtrar por fecha"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                onChange={handleFilterDate}
                                InputLabelProps={{style: {fontSize: 15}}} 
                            />
                        </MuiPickersUtilsProvider>
                    </Grid> : 
                    <Grid item xs={12} sm={3} className={classes.marginTop}>
                        <TextField
                            id="filterStudent"
                            label="Filtrar por estudiante"
                            type="text"
                            className={classes.width}
                            value={deskFiltered}
                            onChange={console.log('filter by student')}
                            InputProps={{
                                shrink: true,
                            }}
                            InputLabelProps={{style: {fontSize: 15}}} 
                        />
                    </Grid>
                }

                <Grid item xs={12} sm={3} className={classes.marginTop}>
                    <TextField
                        id="filterdDesk"
                        label="Filtrar por escritorio"
                        type="number"
                        className={classes.width}
                        value={deskFiltered}
                        onChange={handleFilterDesk}
                        InputProps={{
                            inputProps: { 
                                max: null, min: 1 
                            },
                            shrink: true,
                        }}
                        InputLabelProps={{style: {fontSize: 15}}} 
                    />
                </Grid>
                
                <Grid item xs={12} sm={3} className={classes.marginTop}>
                    <TextField
                        id="filterdSeat"
                        label="Filtrar por asiento"
                        type="number"
                        value={seatFiltered}
                        InputProps={{
                            inputProps: { 
                                max: null, min: 1 
                            },
                            shrink: true,
                        }}
                        className={classes.width}
                        onChange={handleFilterSeat}
                        InputLabelProps={{style: {fontSize: 15}}} 
                    />
                </Grid>
                <Grid item xs={1} sm={1} className={classes.clearFilter}>
                    <IconButton
                        aria-haspopup="true"
                        onClick={clearFilter}
                        color="inherit"
                    >
                        <ClearAllIcon />
                    </IconButton>
                </Grid>
                
            </Grid>

            

            <Grid item xs={12} sm={12} className={classes.accordion}>  
                <Accordion expanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    { !admin ? 
                        <Typography className={classes.heading}><strong>Históricos</strong></Typography> : 
                        <Grid container spacing={2} justify='center'>
                            <Grid item><Button onClick={() => handleFilterState('toConfirm')} variant="outlined" className={classes.toConfirm}> A confirmar</Button></Grid>
                            <Grid item><Button onClick={() => handleFilterState('expired')}   variant="outlined" className={classes.expired}> Vencida</Button></Grid>
                        </Grid> 
                    }
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                            {listCopyBooking.length > 0 ? listCopyBooking.slice((page - 1) * bookingsPerPage, page * bookingsPerPage).map(b => 
                                    <Grid container xs={12} sm={12} >
                                        <Grid container xs={12} sm={11} className={getStyle(b.state)}>
                                            { admin ? <Typography variant='body2'>{b.user.name}</Typography>: null }
                                            <Typography variant='body2'>{b.seat.desk.nameDesk}</Typography>
                                            <Typography variant='body2'>Asiento {b.seat.id}</Typography>
                                            { !admin ? <Typography variant='body2'>{moment(b.date).format('LL')}</Typography>: null}
                                            <Typography variant='body2'>{b.startTime}hs - {b.endTime}hs</Typography>
                                        </Grid>
                                        { admin ?
                                            <Grid item >
                                                {b.state == 'expired' ?
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        onClick={goToConfirmBooking(b)}
                                                        color="primary"
                                                    >
                                                        <GavelIcon/>
                                                    </IconButton> : null
                                                }
                                                {b.state != 'expired' ?
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        //onClick={handleLogOut}
                                                        className={classes.colorConfirmation}
                                                        disabled={getDisabledConfirm(b.startTime)}
                                                    >
                                                        <CheckCircleIcon/>
                                                    </IconButton> : null
                                                }               
                                            </Grid>
                                        : null }
                                    </Grid>
                                        
                                ) : 
                                <Grid container xs={12} sm={12} justify='center'>
                                    <Typography variant='body2' color='#00000082'>Sin reservas</Typography>
                                </Grid>
                            }
                            
                            <Pagination 
                                count={countPages}
                                color="primary"
                                page={page}
                                onChange={handleChangePagination}
                                defaultPage={1}
                                size="small"
                                showFirstButton
                                showLastButton
                                className={classes.pagination}
                            />
                            
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}

export default ListBookingStudent;