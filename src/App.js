import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import './App.css';
import CounterProvider from './context/Counter.provider'

function App(props) {
  return (
    <CounterProvider>
      <Router>
        <Routes />
      </Router>
    </CounterProvider>



  );
}

export default App;
