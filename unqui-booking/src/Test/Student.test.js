import React from 'react'
import { render, screen } from '@testing-library/react'
import Student from '../Components/ProfileStudent/Student'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);


describe('Student', () => {

  let store;
  let component;
 
  beforeEach(() => {
    
    store = mockStore({
      userReducer: { user: {
                "id": 1,
                "name": "Erica Gerez",
                "mail": "erica.gerez@alu.edu.unq.com.ar",
                "password": "Contrasenia1",
                "admin": false,
                "deleted": false
            },
    },
      bookingReducer: {
        bookingsHistoricalByUser: [],
        bookingsCurrentsByUser: [],
        copyHistoricalBookings: [],
        openModalCancel: false
      }
   
  });

    component = renderer.create(
      <Provider store={store}>
        <Student />
      </Provider>
    );

  });

  it('when user is logged, show name user', async () => {
    //console.log(component.toJSON());
    expect(component.toJSON()).toMatchSnapshot();
    //expect(component.toJSON().queryByText(/registradas/i)).toBeInTheDocument();
    // expect(screen.queryByText(/registradas/i)).toBeInTheDocument();
   
    // const renderComponent = (user ) =>
    //   render(
    //   <Provider store={createStore(reducerUser, { user })}>
    //       <Student />
    //   </Provider>
    //   );

    // renderComponent(
    //     { user: {
    //         "id": 1,
    //         "name": "Erica Gerez",
    //         "mail": "erica.gerez@alu.edu.unq.com.ar",
    //         "password": "Contrasenia1",
    //         "admin": false,
    //         "deleted": false
    //     } });

     // expect(screen.queryByText(/erica gerez/i)).toBeInTheDocument();
       //expect(page).toHaveTextContent(/erica gerez/i)

      //expect(getByTestId('name-user')).toBeInTheDocument()
    

   

  });



})