import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  public titulo = 'Alunos';

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
}
