import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import { Route, Switch } from "react-router";
import { Nav } from './components/Nav/Nav';
import { Ciudades } from './components/Ciudades/Ciudades';
import { Login } from './components/Auth/Login';
import { GuiaProfile } from './components/Guia_Panel/GuiaProfile';
import { useLocation } from 'react-router';
import { GuiaRegister } from './components/Auth/GuiaRegister';
import { MovilNav } from './components/Nav/MovilNav';
function App() {
  const location = useLocation()
  return (
    <div className="App">
            {location.pathname === "/guia/profile" ? null : <Nav /> }

      <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/ciudad/:id" component={Ciudades} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/guia/register" component={GuiaRegister} />
      <Route exact path="/guia/profile" component={GuiaProfile} />


      </Switch>
      <MovilNav/>

    </div>
  );
}

export default App;
