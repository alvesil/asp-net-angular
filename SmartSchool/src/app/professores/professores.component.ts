import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
  public titulo = 'Professores';

  public professores = [
    { id: 1, nome: 'Roberto', disciplina: 'Matemática'},
    { id: 2, nome: 'Luis', disciplina: 'História' },
    { id: 3, nome: 'Joana', disciplina: 'Geografia' }
  ];
}
