import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { getByTestId, render, screen, fireEvent, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import Student from '../Components/ProfileStudent/Student';
import  boookings  from './modelBooking';


describe('Student', () => {

    let store;
    let middlewares;
    let mockStore;
  
    beforeEach(() => {
        middlewares = [thunk]
        mockStore = configureStore(middlewares)
        store = mockStore({
            userReducer: { 
                user: {
                    "id": 1,
                    "name": "Erica Gerez",
                    "mail": "erica.gerez@alu.edu.unq.com.ar",
                    "password": "Contrasenia1",
                    "admin": false,
                    "deleted": false
                },
            },
            bookingReducer: {
                bookingsHistoricalByUser: boookings.bookingsHistorical,
                bookingsCurrentsByUser: boookings.bookingsCurrent,
                copyHistoricalBookings: boookings.bookingsHistorical,
                openModalCancel: false
            }
        });
    });

    it('show name user logged in', () => {
        const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
        const nameUSer = getByTestId('user-name')
        expect(nameUSer).toHaveTextContent('Erica Gerez')
    });
    it('show email user logged in', () => {
        const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
        const emailUser = getByTestId('user-email')
        expect(emailUser).toHaveTextContent('erica.gerez@alu.edu.unq.com.ar')
    });
    it('show if a booking was cancelled due to a fine', () => {
        const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
        const textReport = getByTestId('info-cancelled')
        expect(textReport).toBeInTheDocument();
    })
    it('cannot cancelled a expired booking', () => {
        const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
        const buttonCancell = getByTestId('button-cancell-booking-5')
        expect(buttonCancell).toBeDisabled()
    })
    it('can cancelled a uploaded booking', () => {
        const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
        const buttonCancell = getByTestId('button-cancell-booking-1')
        expect(buttonCancell).not.toBeDisabled()
    })
    
})