import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import { Route, Switch } from "react-router";
import { Nav } from './components/Nav/Nav';
import { Ciudades } from './components/Ciudades/Ciudades';
import { Login } from './components/Auth/Login';
function App() {
  return (
    <div className="App">
            <Nav /> 

      <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/ciudad/:id" component={Ciudades} />
      <Route exact path="/Login" component={Login} />

      </Switch>
    </div>
  );
}

export default App;
