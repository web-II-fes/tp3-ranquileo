import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './modules/personas/persona/persona.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PersonaService } from './modules/personas/servicios/persona.service';
import {CursoService} from './servicios/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CursoComponent } from './componentes/curso/curso.component';
import { ListarCursoComponent } from './componentes/listar-curso/listar-curso/listar-curso.component';

@NgModule({
  declarations: [AppComponent, PersonaComponent, CursoComponent, ListarCursoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [PersonaService, CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}