import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonaService } from './../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  itemForm: FormGroup;

  personas: any[] = [];
  idPersona: any;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.getPersona();
  }

  initForm() {
    this.itemForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      edad: [],
    });
  }

  getPersona() {
    this.personaService.getPersonas().subscribe((personas: any) => {
      this.personas = personas;
    });
  }

  editarPersona(persona: any) {
    this.idPersona = persona._id;
    this.itemForm.patchValue({
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad,
    });
  }

  submit() {
    if (this.idPersona) {
      this.personaService
        .editarPersona(this.idPersona, this.itemForm.value)
        .subscribe((persona) => {
          console.log('Persona Editada: ', persona);
        });
    } else{
      this.personaService
        .guardarPersona(this.itemForm.value)
        .subscribe((persona) => {
          console.log('Persona Nueva: ', persona);
        });
      }
  }
}