import logo from './logo.svg';
import './App.css';
import { Allroutes } from './Routes/Allroutes';
import { Navigate } from 'react-router-dom';
import { Navbar } from './Component/Navbar';

function App() {
  return (
    <div className="App">
           <Navbar/>
           <Allroutes/>
    </div>
  );
}

export default App;
