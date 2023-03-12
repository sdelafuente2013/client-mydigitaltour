import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import { Route, Switch } from "react-router";
import { Nav } from './components/Home/Nav/Nav';
import { Ciudades } from './components/Home/Ciudades/Ciudades';
import { Login } from './components/Home/Auth/Login';
import { GuiaProfile } from './components/Guia_Panel/GuiaProfile';
import { useLocation } from 'react-router';
import { GuiaRegister } from './components/Home/Auth/GuiaRegister';
import { MovilNav } from './components/Home/Nav/MovilNav';
import { GuiaTours } from './components/Guia_Panel/GuiaTours';
import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
function App() {
  const location = useLocation()
  return (
    <div className="App">
{location.pathname === "/guia/profile" || location.pathname === "/guia/tours" ? null : <Nav />}

      <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/ciudad/:id" component={Ciudades} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/guia/register" component={GuiaRegister} />
      <Route exact path="/guia/profile" component={GuiaProfile} />
      <Route exact path="/guia/tours" component={GuiaTours} />



      </Switch>
      <MovilNav/>

    </div>
  );
}

export default App;
