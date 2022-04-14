
import { Route, Routes } from 'react-router-dom';
import './App.css';
import OffreList from './components/dashboard/Cardlist';
import Dashboard from './components/dashboard/Dashboard';
import Detail from './components/dashboard/Detail';
import Payment from './components/dashboard/Payment';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className="App">

     <Routes>
     <Route exact path='/' element={<Nav/>}/>

  <Route exact path='/dashboard' element={<Dashboard/>}/>
  <Route exact path='/card' element={<OffreList/>}/>
  <Route exact path='/detail/:id' element={<Detail/>}/>
  <Route exact path='/pay' element={<Payment/>}/>

  

</Routes>    </div>
  );
}

export default App;
