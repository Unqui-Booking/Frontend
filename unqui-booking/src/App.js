import BookingHome from "./Components/Desk/BookingHome";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themeConfig'
import NavBar from "./Components/Home/NavBar"

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <BookingHome></BookingHome>
    </ThemeProvider>
    
  );
}

export default App;

