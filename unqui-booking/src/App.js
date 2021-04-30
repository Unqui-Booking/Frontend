import BookingHome from "./Components/Desk/BookingHome";
import Home from "./Components/Home/Home";
import { BrowserRouter as  HashRouter, Switch, Route  } from 'react-router-dom';
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
        <HashRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/desk' component={BookingHome} />
          </Switch>
          </HashRouter>
        </Provider>
    </ThemeProvider>
    
  );
}

export default App;

