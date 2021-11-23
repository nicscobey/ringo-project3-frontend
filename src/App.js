import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import LandingPage from './components/LandingPage'
import ColorTheme from './components/ColorTheme';
import { ThemeProvider } from '@mui/system';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ColorTheme}>
      <Switch>
        <Route path="/welcome">
          <LandingPage />
        </Route>
        <Route path="/my">
          <Header />
          <Main />
        </Route>
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
