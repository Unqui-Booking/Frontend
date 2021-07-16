import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import store from '../../src/store';
import  { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import Register from '../Components/Login/RegiterUser'

describe('RegisterUser', () => {

  test('when the fields are empty, the registration button is disabled', () => {
    const { getByTestId } = render(<Provider store={store}><Register /></Provider>)
    const buttonRegister = getByTestId('button-register')
    expect(buttonRegister).toBeDisabled()
  })

  test('when all fields are correctly filled in, the registration button is available', () => {
    const { getByTestId } = render(<Provider store={store}><Register /></Provider>)

    userEvent.type(
        screen.getByRole('textbox', { name: /Nombre y apellido/i }),
        'Erica Gerez',
    )
    userEvent.type(
        screen.getByRole('textbox', { name: /Email/i }),
        'erica.gerez@alu.edu.unq.com.ar',
    )
    userEvent.type(
        screen.getByLabelText('Contraseña', { name: /Contraseña/i }),
        'Contrasenia1',
    )

    const buttonRegister = getByTestId('button-register')
    expect(buttonRegister).not.toBeDisabled()
  })

})