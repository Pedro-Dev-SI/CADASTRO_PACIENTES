import axios from 'axios';

//Essa constante vai armazer o endereço da API
const API_URL = 'http://localhost:8080/api/v1/pacientes';

class PacienteService{

   /*Retorna todos os pacientes*/
   getPacientes(){
      return axios.get(API_URL);
   }

   /*Adiciona um novo paciente*/
   addPaciente(paciente){
      return axios.post(API_URL, paciente);
   }

   /*Este método pega um paciente pelo seu id*/
   getPacienteById(pacienteId){
      return axios.get(API_URL + '/' + pacienteId);
   }

   /*Atualiza os dados de um paciente*/
   updatePaciente(paciente, pacienteId){
      return axios.put(API_URL + '/' + pacienteId, paciente);
   }

   /*Deleta um paciente*/
   deletePaciente(pacienteId){
      return axios.delete(API_URL + '/' + pacienteId);
   }
}

export default new PacienteService()