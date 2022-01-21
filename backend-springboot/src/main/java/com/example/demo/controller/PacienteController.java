package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Paciente;
import com.example.demo.repository.PacienteRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PacienteController {
	
	@Autowired
	private PacienteRepository pacienteRepository;
	
	//Retornar todos os pacientes
	@GetMapping("/pacientes")
	public List<Paciente> getAllPacientes(){
		return pacienteRepository.findAll();
	}
	
	//Adiciona um novo paciente
	@PostMapping("/pacientes")
	public Paciente adicionaPaciente(@RequestBody Paciente paciente) {
		return pacienteRepository.save(paciente);
	}
	
	//Retorna paciente pelo seu id
	@GetMapping("/pacientes/{id}")
	public ResponseEntity<Paciente> getPacienteById(@PathVariable Long id) {
		
		Paciente paciente = pacienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Paciente não existe no sistema"));
		return ResponseEntity.ok(paciente);
	}
	
	//Atualiza um paciente já cadastrado
	@PutMapping("/pacientes/{id}")
	public ResponseEntity<Paciente> updatePaciente(@PathVariable Long id, @RequestBody Paciente pacienteDados){
		
		Paciente paciente = pacienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Paciente não existe no sistema"));
		
		paciente.setCpf(pacienteDados.getCpf());
		paciente.setPrimeiro_nome(pacienteDados.getPrimeiro_nome());
		paciente.setSobrenome(pacienteDados.getSobrenome());
		paciente.setData_nascimento(pacienteDados.getData_nascimento());
		paciente.setAltura(pacienteDados.getAltura());
		paciente.setPeso(pacienteDados.getPeso());
		paciente.setUf(pacienteDados.getUf());
		
		Paciente pacienteAtualizado = pacienteRepository.save(paciente);
		
		return ResponseEntity.ok(pacienteAtualizado);
	}
	
	//Deleta um paciente
	@DeleteMapping("/pacientes/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePaciente(@PathVariable Long id){
		
		Paciente paciente = pacienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Paciente não existe no sistema"));
		
		pacienteRepository.delete(paciente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
