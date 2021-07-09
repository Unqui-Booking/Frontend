import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import store from '../../src/store';
import  { Provider } from 'react-redux';
import  Login  from '../Components/Login/Login'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('http://localhost:8080/user/login', (req, res, ctx) => {
      // Respond with a mocked user token that gets persisted
      // in the `sessionStorage` by the `Login` component.
      return res(ctx.json({ token: 'mocked_user_token' }))
    }),
  )
  
  // Enable API mocking before tests.
  beforeAll(() => server.listen())
  
  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())
   
  // Disable API mocking after the tests are done.
  afterAll(() => server.close())

describe("Login", () =>{
    it("In the page Login exists ",  () => {
        render(<Provider store={store}>
                    <Login/>
                </Provider>
              );
        expect(screen.queryByText(/ingresar/i)).toBeInTheDocument();
    })


    // it('When user is loged, go to home', () => {
    //     const pushEspia = jest.fn();
    //     const { getByTestId } = render(
    //                                 <Provider store={store}>
    //                                     <Login history={{ push: pushEspia }}/>
    //                                 </Provider>);

    //     fireEvent.click(getByTestId('btn-login'))

    //     expect(pushEspia).toBeCalledWith(`/home`)
    // })

    it('allows the user to log in', () => {
      //   render(<Provider store={store}><Login /></Provider>)
      //   userEvent.type(
      //     screen.getByRole('textbox', { name: /Email/i }),
      //     'erica.gerez@alu.edu.unq.com.ar',
      //   )
      //   userEvent.type(
      //     screen.getByLabelText('Contraseña', { name: /Contraseña/i }),
      //     'Contrasenia1',
      //   )
        
      //   userEvent.click(screen.getByText(/ingresar/i))
      //   const eins = getByTestId("title-home-student");
      //  // const title = screen.findByText(/sistema/i)

      //   expect(eins).toHaveTextContent(/sistema/i);
        
        //expect(screen.getByTestId("title-home-student").toBeInTheDocument());
   
      })
})



    

