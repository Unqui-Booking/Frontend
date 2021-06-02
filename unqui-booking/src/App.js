import BookingHome from "./Components/BookingDesk/BookingHome";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import RegiterUser from "./Components/Login/RegiterUser";
import { BrowserRouter as  HashRouter, Switch, Route  } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import NavBar from "./Components/Home/NavBar";
import store from './store';
import { Provider } from 'react-redux';
import Student from "./Components/ProfileStudent/Student";

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
        <NavBar></NavBar>  
          <Switch>
              <Route path='/home' component={Home} />
              <Route path='/desk' component={BookingHome} />
              <Route path='/register' component={RegiterUser}/>
              <Route path='/student' component={Student}/>
              <Route path='/' component={Login} />
          </Switch>
          </HashRouter>
        </Provider>
    </ThemeProvider>
    
  );
}

export default App;

