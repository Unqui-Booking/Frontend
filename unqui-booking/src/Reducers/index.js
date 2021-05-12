import { combineReducers } from 'redux'
import bookingReducer from './bookingReducer'
import deskReducer from './deskReducer'
import chairReducer from './chairReducer'

export default combineReducers({
  bookingReducer: bookingReducer,
  deskReducer: deskReducer,
  chairReducer: chairReducer,
})
