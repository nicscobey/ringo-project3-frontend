import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
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
    </div>
  );
}

export default App;
