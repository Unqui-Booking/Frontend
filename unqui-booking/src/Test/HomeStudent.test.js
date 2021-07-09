import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { createStore } from 'redux';
import store from '../../src/store';
import  { Provider } from 'react-redux';
import HomeStudent from '../Components/Student/HomeStudent'
import  reducerUser  from '../Reducers/userReducer'

describe('HomeStudent', () => {
  describe('When access to home page for student', () => {
    it('show main title', () => {
      // render(<Provider store={store}><HomeStudent /></Provider>)
      // expect(screen.queryByText(/Sistema de gestión de reservas de escritorios/i)).toBeInTheDocument();
    })

    const renderComponent = ({ user }) =>
        render(
        <Provider store={createStore(reducerUser, { user })}>
            <HomeStudent />
        </Provider>
        );

    it('renders initial count', async () => {
       
        // renderComponent(
        //                   { user: {
        //                       "id": 1,
        //                       "name": "Erica Gerez",
        //                       "mail": "erica.gerez@alu.edu.unq.com.ar",
        //                       "password": "Contrasenia1",
        //                       "admin": false,
        //                       "deleted": false
        //                   } });

        // expect(getByTestId('title-login')).toBeInTheDocument()
    });


  })
})
