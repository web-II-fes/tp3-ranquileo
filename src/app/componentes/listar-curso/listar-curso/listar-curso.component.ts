import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCurso', 'profesor', 'ano', 'estado'];
  dataSource: any[];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos();

  }
  getCursos() {
    this.cursoService.getCursos().subscribe((data: any) => {
      this.dataSource = data;
    });
  }

}
