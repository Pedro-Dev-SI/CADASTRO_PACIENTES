import React, { Component } from 'react';
import PacienteService from '../services/PacienteService';

export default class ListaPacientes extends Component {

   constructor(props) {
      super(props)

      this.state = {
         pacientes: []
      }

      this.adicionarPaciente = this.adicionarPaciente.bind(this);
      this.editarPaciente = this.editarPaciente.bind(this);
      this.deletarPaciente = this.deletarPaciente.bind(this);
      this.verPaciente = this.verPaciente.bind(this);

   }

   componentDidMount() {
      PacienteService.getPacientes().then((response) => {
         this.setState({ pacientes: response.data });
      });
      
   }

   //Este metodo será responsável por adicionar um novo paciente
   adicionarPaciente(){
      this.props.history.push('/novo-paciente');
   }

   //Este metodo será responsável por editar um paciente
   editarPaciente(id){
      this.props.history.push(`/atualiza-paciente/${id}`);
   }

   //Este metodo será responsável por deletar um paciente
   deletarPaciente(id){
      PacienteService.deletePaciente(id).then(response => {
         this.setState({pacientes: this.state.pacientes.filter(paciente => paciente.id !== id)});
      })
   }

   //Este metodo será responsável por ver detalhes do paciente
   verPaciente(id){
      this.props.history.push(`/detalhes-paciente/${id}`);
   }

  render() {
    return(
      <div>
         <h1 className="titulo-lista-pacientes text-center">Pacientes Cadastrados</h1>
         
         <button className="btn btn-primary botao-adiciona" onClick={this.adicionarPaciente}>Novo Paciente</button>
         
         <div className="row">
            <table className="table table-striped table-bordered">
               <thead>
                  <tr>
                     <th>Nome</th>
                     <th>Sobrenome</th>
                     <th>Ações</th>
                  </tr>
               </thead>

               <tbody>
                  {
                     this.state.pacientes.map(paciente =>
                        <tr key={paciente.id}>
                           <td>{paciente.primeiro_nome}</td>
                           <td>{paciente.sobrenome}</td>
                           <td>
                              <button onClick = {() => this.editarPaciente(paciente.id)} className="btn btn-warning">Editar</button>
                              <button onClick = {() => this.deletarPaciente(paciente.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Deletar</button>
                              <button onClick = {() => this.verPaciente(paciente.id)} className="btn btn-info" style={{marginLeft: "10px"}}>Ver</button>
                           </td>
                        </tr>
                     )
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
  }
}
