import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import store from '../store';
import  { Provider } from 'react-redux';
import  Login  from '../Components/Login/Login';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


    const server = setupServer( 
        rest.get(`http://localhost:8080/user/login`, (req, res, ctx) => {

            const query = req.url.searchParams
            const mail = query.get("mail")
            const password = query.get("password")

            return res(ctx.json({   
                                    mail,
                                    password
                                }))
        })
    )

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())
    
    test('an unexpected error is reported when login fails ', async () => {
        server.use(
          rest.get(`http://localhost:8080/user/login`, (req, res, ctx) => {
            return res(ctx.status(400))
          })
        )
      
        const { getByTestId }  = render(<Provider store={store}><Login /></Provider>)

        userEvent.type(
              screen.getByRole('textbox', { name: /Email/i }),
              'erica.gerez@alu.edu.unq.com.ar',
            )
        userEvent.type(
          screen.getByLabelText('Contraseña', { name: /Contraseña/i }),
          'Contrasenia1',
        )

        fireEvent.click(screen.getByText('Ingresar'))

        const pageError = getByTestId('page-error')
       
        expect(pageError).toHaveTextContent('Ocurrió un error inesperado');
    })
