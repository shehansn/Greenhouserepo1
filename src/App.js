import './App.css';
import { BrowserRouter , Router,Switch, Routes, Route, Link } from 'react-router-dom';
import Temperature from './pages/Temperature';
import Humidity from './pages/Humidity';
import SoilMoisture from './pages/SoilMoisture';
import SoilTemperature from './pages/SoilTemperature';
import FanStatus from './pages/FanStatus';
import MotorStatus from './pages/MotorStatus';
//import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header/> */}
        {/* <Navbar/>  */}
        <Switch>
        <Route path="/temperature" exact>
          <Temperature/>
        </Route>
        <Route path="/humidity" exact>
          <Humidity/>
        </Route>
        <Route path="/soilmoisture" exact>
          <SoilMoisture/>
        </Route>
        <Route path="/soiltemperature" exact>
          <SoilTemperature/>
        </Route>
        <Route path="/fanstatus" exact>
          <FanStatus/>
        </Route>
        <Route path="/motorstatus" exact>
          <MotorStatus/>
        </Route>

        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
