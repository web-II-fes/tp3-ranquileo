import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../../servicios/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  itemForm: FormGroup;

  cursos: any[] = [];
  idCurso: string;
  constructor(
    private fb: FormBuilder, private cursoService: CursoService, private paramRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.paramRoute.paramMap.subscribe((param) => {
      debugger;
      this.idCurso = param.get('id');

      if (this.idCurso !== 'new') {
        this.getCursoById(this.idCurso);
      }
    });
  }
  getCursoById(idCurso: string) {
    this.cursoService.getCursoById(idCurso).subscribe((data) => {
      debugger;
      let cursoId = data;

      this.itemForm.patchValue(cursoId);
    });
  }
  
  initForm() {
    this.itemForm = this.fb.group({
      nombreCurso: [''],
      profesor: [''],
      ano: [],
      estado: [''],
    });
  }

  editarCurso(curso: any) {
    this.idCurso = curso._id;
    this.itemForm.patchValue({
      nombreCurso: curso.nombreCurso,
      profesor: curso.profesor,
      ano: curso.ano,
      estado: curso.estado,
    });
  }

  borrarCurso(curso: any) {
    this.idCurso = curso._id;
    this.cursoService
      .borrarCurso(this.idCurso)
      .subscribe((result) => console.log('Curso Borrada: ', curso));
  }

  submit() {
    if (this.idCurso) {
      this.cursoService
        .editarCurso(this.idCurso, this.itemForm.value)
        .subscribe((curso) => {
          console.log('Curso Editada: ', curso);
        });
    } else {
      this.cursoService.saveCurso(this.itemForm.value).subscribe((curso) => {
        console.log('Curso Nueva: ', curso);
      });
    }
  }

}
