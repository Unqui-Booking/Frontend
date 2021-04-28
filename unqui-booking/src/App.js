import BookingHome from "./Components/Desk/BookingHome";
import Home from "./Components/Home/Home";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themeConfig'
import NavBar from "./Components/Home/NavBar"
import store from './store'
import {Provider} from 'react-redux';

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavBar></NavBar>
        {/** <BookingHome></BookingHome>**/}
        <Home></Home>
        </Provider>
    </ThemeProvider>
    
  );
}

export default App;

