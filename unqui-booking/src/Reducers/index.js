import { combineReducers } from 'redux'
import bookingReducer from './bookingReducer'
import deskReducer from './deskReducer'

export default combineReducers({
  bookingReducer: bookingReducer,
  deskReducer: deskReducer,
})
