package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pacientes")
public class Paciente {
	
	//ATRIBUTOS
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "cpf")
	private String cpf;
	
	@Column(name = "primeiro_nome")
	private String primeiro_nome;
	
	@Column(name = "sobrenome")
	private String sobrenome;
	
	@Column(name = "data_nascimento")
	private String data_nascimento;
	
	@Column(name = "peso")
	private double peso;
	
	@Column(name = "altura")
	private double altura;
	
	@Column(name = "uf")
	private String uf;
	
	//CONSTRUTOR PADRÃO
	public Paciente() {
		
	}
	
	//CONSTRUTOR COM PARÂMETROS
	public Paciente(long id, String cpf, String primeiro_nome, String sobrenome, String data_nascimento, double peso, double altura, String uf) {
		super();
		this.id = id;
		this.cpf = cpf;
		this.primeiro_nome = primeiro_nome;
		this.sobrenome = sobrenome;
		this.data_nascimento = data_nascimento;
		this.peso = peso;
		this.altura = altura;
		this.uf = uf;
	}
	
	//GETTERS AND SETTERS
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getPrimeiro_nome() {
		return primeiro_nome;
	}
	public void setPrimeiro_nome(String primeiro_nome) {
		this.primeiro_nome = primeiro_nome;
	}
	public String getSobrenome() {
		return sobrenome;
	}
	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	public String getData_nascimento() {
		return data_nascimento;
	}
	public void setData_nascimento(String data_nascimento) {
		this.data_nascimento = data_nascimento;
	}
	public double getPeso() {
		return peso;
	}
	public void setPeso(double peso) {
		this.peso = peso;
	}
	public double getAltura() {
		return altura;
	}
	public void setAltura(double altura) {
		this.altura = altura;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	
	
}
