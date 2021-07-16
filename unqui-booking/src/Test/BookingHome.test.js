import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import BookingHome from '../Components/BookingDesk/BookingHome';
import  boookings  from './modelBooking';

describe('BookingHome', () => {
    
    let store;
    let middlewares;
    let mockStore;
    

    beforeEach(() => {
        middlewares = [thunk]
        mockStore = configureStore(middlewares)
        store = mockStore({
            deskReducer: {
                desk: {
                        "id": 3,
                        "nameDesk": "Escritorio 3",
                        "area": "silent",
                        "availableDesk": true,
                        "deleted": false
                }
            },
            chairReducer: {
                seatId: 1
            },
            bookingReducer:{
                bookingsFilteredBySeatDate: boookings.bookingsFilteredBySeatDate,
            },
            dateHoursReducer: {},
            snackbarReducer: {}
        });

    });

    it('main title contains name desk and number seat', () => {
        const { getByTestId }  = render(<Provider store={store}><BookingHome/></Provider>)
        const title = getByTestId('title-booking');
        expect(title).toHaveTextContent('Escritorio 3, asiento 1')
    })

    it('show info about booking ', () => {
        const { getByTestId }  = render(<Provider store={store}><BookingHome/></Provider>)
        const info = getByTestId('info-booking');
        expect(info).toHaveTextContent('15hs - 16hs')
    })

})
