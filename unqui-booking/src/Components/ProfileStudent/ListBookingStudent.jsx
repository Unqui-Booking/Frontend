import { Accordion, AccordionDetails, AccordionSummary, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState }  from 'react'
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '@material-ui/lab/Pagination';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ClearAllIcon from '@material-ui/icons/ClearAll';

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
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        marginTop: '9px',
      },
  }));

const ListBookingStudent = (props) => {

    const classes = useStyles();
    const {listBooking, listCopyBooking, setCopy, admin} = props
    const [dateFilter, setDateFilter] = useState(null);
    const [deskFiltered, setDeskFiltered] = useState(null);
    const [seatFiltered, setSeatFiltered] = useState(null);
    const countPages = Math.ceil(listBooking.length / 6);
    const bookingsPerPage = 6;  
    const [page, setPage] = useState(1);

    const handleFilterDate = (date) => {
        if(date != null){
            setDateFilter(date);    
            let month = date.getMonth()+1 < 10 ? "0"+ (date.getMonth()+1).toString() : (date.getMonth()+1).toString();
            let day = date.getDate() < 10 ? "0"+ date.getDate().toString() : date.getDate();
            let selectedDate = date.getFullYear().toString() + "-" + month + "-" + day;
            let filtrados = listBooking.filter(b => b.date ==  selectedDate);
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
                        <FormControl className={classes.formControl}>
                             <InputLabel id="demo-simple-select-label">Filtrar por estado</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={null}
                                onChange={console.log("estado")}
                                >
                                <MenuItem value={10}>Vencida</MenuItem>
                                <MenuItem value={20}>Por confirmar</MenuItem>
                                <MenuItem value={20}>Confirmada</MenuItem>
                            </Select>
                        </FormControl>
                       

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
                    { !admin ?    <Typography className={classes.heading}><strong>Históricos</strong></Typography>: null }
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                            {listCopyBooking.length > 0 ? listCopyBooking.slice((page - 1) * bookingsPerPage, page * bookingsPerPage).map(b => 
                                    
                                    <Grid container column xs={12} sm={12} className={classes.containerHistorical}>
                                        { admin ? <Typography variant='body2'>{b.user.name}</Typography>: null }
                                        <Typography variant='body2'>{b.seat.desk.nameDesk}</Typography>
                                        <Typography variant='body2'>Asiento {b.seat.id}</Typography>
                                        <Typography variant='body2'>{moment(b.date).format('LL')}</Typography>
                                        <Typography variant='body2'>{b.startTime}hs - {b.endTime}hs</Typography>
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