import { Component } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  public alunoForm!: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno | null = null;

  public alunos = [
    { 
      id: 1,
      nome:'Marta',
      sobrenome: 'Machado',
      telefone: 336124877
    },
    { 
      id: 2,
      nome:'Paula',
      sobrenome: 'Alvares',
      telefone: 33645877
    },
    { 
      id: 3,
      nome:'Laura',
      sobrenome: 'Camino',
      telefone: 33789877
    },
    { 
      id: 4,
      nome:'Luiza',
      sobrenome: 'Andrade',
      telefone: 33424877
    },
    { 
      id: 5,
      nome:'Lucas',
      sobrenome: 'Silva',
      telefone: 35854877
    },
    { 
      id: 6,
      nome:'Pedro',
      sobrenome: 'Couto',
      telefone: 98754877
    },
    { 
      id: 7,
      nome:'Paulo',
      sobrenome: 'Claudio',
      telefone: 33654877
    }
  ];

  constructor(private fb: FormBuilder)
  {
    this.criarForm();
  }

  selecionarAluno(aluno: Aluno)
  {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }
  voltar()
  {
    this.alunoSelecionado = null;
  }
}
