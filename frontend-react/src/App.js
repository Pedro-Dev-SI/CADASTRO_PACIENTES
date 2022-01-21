import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListaPacientes from './components/ListaPacientes.js';
import NavMenu from './components/NavMenu';
import Rodape from './components/Rodape';
import AdicionaPaciente from './components/AdicionaPaciente';
import AtualizaPaciente from './components/AtualizaPaciente';
import DetalhesPaciente from './components/DetalhesPaciente';


function App() {
  return (
    <div>
      <Router>
          <NavMenu/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListaPacientes}></Route>
                <Route path="/pacientes" component = {ListaPacientes}></Route>
                <Route path="/novo-paciente" component = {AdicionaPaciente}></Route>
                <Route path="/atualiza-paciente/:id" component = {AtualizaPaciente}></Route>
                <Route path="/detalhes-paciente/:id" component = {DetalhesPaciente}></Route>
              </Switch>
            </div>
          <Rodape/>
      </Router>
    </div>
    
  );
}

export default App;
