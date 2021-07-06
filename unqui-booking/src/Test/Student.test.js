import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { createStore } from 'redux';
import store from '../../src/store';
import  { Provider } from 'react-redux';
import Student from '../Components/ProfileStudent/Student'
import  reducerUser  from '../Reducers/userReducer'

describe('Student', () => {
  describe('Show user details', () => {
    
    const renderComponent = ({ user }) =>
        render(
        <Provider store={createStore(reducerUser, { user })}>
            <Student />
        </Provider>
        );

    it('when user is logged, show name user', async () => {
       
        const { getByText } = renderComponent(
                                { user: {
                                    "name": "Erica Gerez",
                                    "mail": "erica.gerez@alu.edu.unq.com.ar",
                                } });
        await waitForElement(() => getByText(/gerez/i));
    });


  })
})