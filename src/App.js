import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
