import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ModalCancelBooking = (props) => { 

  const { booking, openModalCancel, setOpenModalCancel } = props;

  const handleClose = () => { 
    setOpenModalCancel(false);
  };

  return (
      <Dialog
        open={openModalCancel}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cancelar reserva"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              booking != null ? 
              <p>
                ¿Desea cancelar la reserva para el <strong>asiento {booking.seat.id}</strong> en el <strong>escritorio {booking.seat.desk.id} </strong>   
                el día <strong>{booking.date.split("-").reverse().join().replaceAll(",","/")} </strong>  
                en el horario <strong>{booking.startTime}hs - {booking.endTime}hs</strong>?
              </p> : null
            }
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>  
          <Button onClick={handleClose} color="primary"> 
            Sí
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
  );
}


export default ModalCancelBooking;