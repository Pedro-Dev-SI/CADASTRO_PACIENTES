import React, { Component } from 'react';
import PacienteService from '../services/PacienteService';

export default class AdicionaPaciente extends Component {

   constructor(props) {

      super(props);

      this.state = {
         primeiro_nome: '',
         sobrenome: '',
         cpf: '',
         data_nascimento: '',
         peso: '',
         altura: '',
         uf: ''
      }

      this.changePnomeHandler = this.changePnomeHandler.bind(this);
      this.changeSobrenomeHandler = this.changeSobrenomeHandler.bind(this);
      this.changeCpfHandler = this.changeCpfHandler.bind(this);
      this.changeDataNascimentoHandler = this.changeDataNascimentoHandler.bind(this);
      this.changePesoHandler = this.changePesoHandler.bind(this);
      this.changeAlturaHandler = this.changeAlturaHandler.bind(this);
      this.changeUfHandler = this.changeUfHandler.bind(this);

   }

   changePnomeHandler = (event) => {
      this.setState({primeiro_nome: event.target.value});
   }

   changeSobrenomeHandler = (event) => {
      this.setState({sobrenome: event.target.value});
   }

   changeCpfHandler = (event) => {
      this.setState({cpf: event.target.value});
   }

   changeDataNascimentoHandler = (event) => {
      this.setState({data_nascimento: event.target.value});
   }

   changePesoHandler = (event) => {
      this.setState({peso: event.target.value});
   }

   changeAlturaHandler = (event) => {
      this.setState({altura: event.target.value});
   }

   changeUfHandler = (event) => {
      this.setState({uf: event.target.value});
   }

   addPaciente = (event) => {
      event.preventDefault();
      let paciente = {
         primeiro_nome: this.state.primeiro_nome,
         sobrenome: this.state.sobrenome,
         cpf: this.state.cpf,
         data_nascimento: this.state.data_nascimento,
         peso: this.state.peso,
         altura: this.state.altura,
         uf: this.state.uf
      }

      PacienteService.addPaciente(paciente).then(response => {
         this.props.history.push('/pacientes');
      });
      
   }

   cancelar(){
      this.props.history.push('/pacientes');
   }

  render() {
    return(
       <div>
          <div className="container">
             <div className="row">
                <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "70px"}}>
                   <h2 className="texte-center">Cadastro de Pacientes</h2>
                   <div className="card-body">
                      <form>

                         {/*Input do primeiro nome do paciente*/}
                         <div className="form-group">
                           <label>Primeiro nome: </label>
                           <input name="primeiro_nome" className="form-control" placeholder="Primeiro nome" 
                           value={this.state.primeiro_nome} onChange={this.changePnomeHandler}/>
                         </div>

                         {/*Input do sobrenome do paciente*/}
                         <div className="form-group">
                           <label>Sobrenome: </label>
                           <input name="sobrenome" className="form-control" placeholder="Sobrenome" 
                           value={this.state.sobrenome} onChange={this.changeSobrenomeHandler}/>
                         </div>

                         {/*Input do CPF do paciente*/}
                         <div className="form-group">
                           <label>CPF: </label>
                           <input name="cpf" className="form-control" placeholder="CPF"
                           value={this.state.cpf} onChange={this.changeCpfHandler}/>
                         </div>

                         {/*Input da data de nascimento do paciente*/}
                         <div className="form-group">
                           <label>Data de nascimento: </label>
                           <input name="data_nascimento" className="form-control" placeholder="Data de nascimento"
                           value={this.state.data_nascimento} onChange={this.changeDataNascimentoHandler}/>
                         </div>

                         {/*Input do peso do paciente*/}
                         <div className="form-group">
                           <label>Peso: </label>
                              <input name="peso" className="form-control" placeholder="Informe o peso em Kg"
                              value={this.state.peso} onChange={this.changePesoHandler} type="number"/>
                         </div>

                         {/*Input da altura do paciente*/}
                         <div className="form-group">
                           <label>Altura: </label>
                           <input name="altura" className="form-control" placeholder="Informe a altura em metros"
                           value={this.state.altura} onChange={this.changeAlturaHandler} type="number"/>
                         </div>

                         {/* Dropdown list de Estados brasileiros */}
                         <div className="form-group" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <label>UF: </label>
                              <select className="custom-select" name="uf" value={this.state.uf} 
                              onChange={this.changeUfHandler} style={{marginLeft: "10px"}}>
                                 <option value="">Selecione um Estado...</option>
                                 <option value="AC">AC</option>
                                 <option value="AL">AL</option>
                                 <option value="AP">AP</option>
                                 <option value="AM">AM</option>
                                 <option value="BA">BA</option>
                                 <option value="CE">CE</option>
                                 <option value="DF">DF</option>
                                 <option value="ES">ES</option>
                                 <option value="GO">GO</option>
                                 <option value="MA">MA</option>
                                 <option value="MT">MT</option>
                                 <option value="MS">MS</option>
                                 <option value="MG">MG</option>
                                 <option value="PA">PA</option>
                                 <option value="PB">PB</option>
                                 <option value="PR">PR</option>
                                 <option value="PE">PE</option>
                                 <option value="PI">PI</option>
                                 <option value="RJ">RJ</option>
                                 <option value="RN">RN</option>
                                 <option value="RS">RS</option>
                                 <option value="RO">RO</option>
                                 <option value="RR">RR</option>
                                 <option value="SC">SC</option>
                                 <option value="SP">SP</option>
                                 <option value="SE">SE</option>
                                 <option value="TO">TO</option>
                              </select>
                         </div>
                        
                        {/* Botão para adicionar um novo paciente */}
                        <button className="btn btn-success" onClick={this.addPaciente.bind(this)}>Adicionar</button>

                        {/* Botão para cancelar o cadastro */}
                        <button className="btn btn-danger" onClick={this.cancelar.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>

                      </form>
                   </div>
                </div>
             </div>
          </div>
       </div>
    );
  }
}
