import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import ColorTheme from './components/ColorTheme';
import { ThemeProvider } from '@mui/system';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ColorTheme}>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
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
