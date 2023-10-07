import { Component } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
  public titulo = 'Professores';
  public professorSelecionado: Professor = new Professor;

  public professores = [
    { id: 1, nome: 'Roberto', disciplina: 'Matemática'},
    { id: 2, nome: 'Luis', disciplina: 'História' },
    { id: 3, nome: 'Joana', disciplina: 'Geografia' }
  ];

  selecionarProfessor(professor: Professor)
  {
    this.professorSelecionado = professor;
  }

  voltar()
  {
    this.professorSelecionado == null;
  }
}
