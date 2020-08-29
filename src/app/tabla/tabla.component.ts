import { Haibu } from './../Haibu';
import { UserService } from './../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  ELEMENT_DATA: Haibu[];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono', 'rut', 'fechaNacimiento'];
  dataSource = new MatTableDataSource<Haibu>(this.ELEMENT_DATA);

  // tslint:disable-next-line:typedef
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( public service: UserService ) {}

  // tslint:disable-next-line:typedef
  ngOnInit()  {
    this.todosHaibu();
  }

  // tslint:disable-next-line:typedef
  public todosHaibu() {
    const resp = this.service.getUsers();
    resp.subscribe(report => this.dataSource.data = report as Haibu[]);
  }
}
