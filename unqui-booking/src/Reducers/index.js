import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import deskReducer from './deskReducer';
import chairReducer from './chairReducer';
import alertMessageReducer from './alertMessageReducer';
import dateHoursReducer from './dateHoursReducer';
import snackbarReducer from './snackbarReducer';
import userReducer from './userReducer';

export default combineReducers({
  bookingReducer: bookingReducer,
  deskReducer: deskReducer,
  chairReducer: chairReducer,
  alertMessageReducer: alertMessageReducer,
  dateHoursReducer: dateHoursReducer,
  snackbarReducer: snackbarReducer,
  userReducer: userReducer
})
