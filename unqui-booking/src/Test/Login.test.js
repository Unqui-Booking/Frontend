import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import store from '../../src/store';
import  { Provider } from 'react-redux';
import  Login  from '../Components/Login/Login'

describe("Login", () =>{
    it("In the page Login exists ", () => {
        render(<Provider store={store}>
                    <Login/>
                </Provider>
              );
        expect(screen.queryByText(/ingresar/i)).toBeInTheDocument();
    })


    it('When user is loged, go to home', () => {
        const pushEspia = jest.fn();
        const { getByTestId } = render(
                                    <Provider store={store}>
                                        <Login history={{ push: pushEspia }}/>
                                    </Provider>);

        fireEvent.click(getByTestId('btn-login'))

        expect(pushEspia).toBeCalledWith(`/home`)
    })
})



    

