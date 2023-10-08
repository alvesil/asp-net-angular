import { Component, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  public titulo = 'Professores';
  public professorSelecionado: Professor | null = null;
  public professorForm! : FormGroup;
  public modalRef!: BsModalRef;

  public professores = [
    { id: 1, nome: 'Roberto', disciplina: 'Matemática'},
    { id: 2, nome: 'Luis', disciplina: 'História' },
    { id: 3, nome: 'Joana', disciplina: 'Geografia' }
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  constructor(private fb: FormBuilder,
              private modalService: BsModalService){
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
