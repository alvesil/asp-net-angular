import { Component } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
  public titulo = 'Professores';
  public professorSelecionado: Professor | null = null;
  public professorForm! : FormGroup;

  public professores = [
    { id: 1, nome: 'Roberto', disciplina: 'Matemática'},
    { id: 2, nome: 'Luis', disciplina: 'História' },
    { id: 3, nome: 'Joana', disciplina: 'Geografia' }
  ];

  constructor(private fb: FormBuilder){
    this.criarForm();
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  selecionarProfessor(professor: Professor)
  {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  voltar()
  {
    this.professorSelecionado = null;
  }
}
