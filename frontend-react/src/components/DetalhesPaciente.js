import React, { Component } from 'react';
import PacienteService from '../services/PacienteService';

export default class DetalhesPaciente extends Component {

   constructor(props) {
      super(props);
      this.state = {
         id: this.props.match.params.id,
         paciente: {}
      };
   }

   componentDidMount() {
      PacienteService.getPacienteById(this.state.id).then((response) => {
         this.setState({ paciente: response.data });
      })
   }

   render() {
   

         return (
            <div>
               <div className="card col-md-6 offset-md-3" style={{marginTop: "70px"}}>
                  <h2 className="text-center">Detalhes do Paciente</h2>
                  <div className="card-body">
                     <div className="row">
                        <label>Primeiro Nome: </label>
                        <p style={{fontWeight: 'bold'}}>{this.state.paciente.primeiro_nome}</p>
                     </div>

                     <div className="row">
                        <label>Sobrenome: </label>
                        <p style={{fontWeight: 'bold'}}>{this.state.paciente.sobrenome}</p>
                     </div>

                     <div className="row">
                        <label>Data de Nascimento: </label>
                        <p style={{fontWeight: 'bold'}}>{this.state.paciente.data_nascimento}</p>
                     </div>

                     <div className="row">
                        <label>Estado: </label>
                        <p style={{fontWeight: 'bold'}}>{this.state.paciente.uf}</p>
                     </div>

                     <div className="row">
                        <label>Peso: </label>
                        <p style={{fontWeight: 'bold'}}>{this.state.paciente.peso}</p>
                     </div>

                     <div className="row">
                        <label>Altura: </label>
                        <p style={{fontWeight: 'bold'}}>{this.state.paciente.altura}</p>
                     </div>
                  </div>
               </div>
            </div>
         );
   }
}
