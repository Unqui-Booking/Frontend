import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { getByTestId, render, screen, fireEvent, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import Student from '../../Components/ProfileStudent/Student';
import  boookings  from './modelBooking';


describe('Student', () => {
    let component;
    let store;
    let middlewares;
    let mockStore;
  
    describe('When a student user is logged in', () => {
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
            store.dispatch = jest.fn();
            component = renderer.create(
                <Provider store={store}>
                  <Student />
                </Provider>
            );
        });
        it('show name user', () => {
            const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
            const nameUSer = getByTestId('user-name')
            expect(nameUSer).toHaveTextContent('Erica Gerez')
        });
        it('show email user', () => {
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


        it('can view the details of a booking to be cancelled', () => {
            const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
            //const buttonCancell = getByTestId('button-cancell-booking-2')
            //buttonCancell.click()
            
            //expect(details).toHaveTextContent('asiento 11')
            //expect(store.dispatch).toHaveBeenCalledTimes(1);

            // renderer.act(() => {
            //     component.root.getByTestId('button-cancell-booking-2').props.onClick();
            // });
            // const details = getByTestId('modal-details')
            

            // component.root.findByProps({ className: "aaa" }).props.onClick();
            // expect(details).toHaveTextContent('asiento 11')
            // const b = getByTestId('button-cancell-booking-2');
            // fireEvent.click(b);
            // expect(getByTestId('modal-details')).toHaveTextContent('asiento 11')
        })
        it('cancels a uploaded booking', () => {
            // const { getByTestId }  = render(<Provider store={store}><Student/></Provider>)
            // const booking = getByTestId('booking-2')
            // const buttonCancell = getByTestId('button-cancell-booking-2')
            // fireEvent.click(buttonCancell);
            // const buttonConfirmCancell = getByTestId('confirm-cancel')
            // fireEvent.click(buttonConfirmCancell);
            // expect(booking).not.toBeInTheDocument();
        })
    })
    

    describe('When a student user is not logged in', () => {
        test('shows cannot load page', () => {

        })
    })
})