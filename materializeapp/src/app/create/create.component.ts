import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  roles =[
    {id: 1,rol: 'Chofer'},
    {id: 2,rol: 'Cargador'},
    {id: 3,rol: 'Auxiliar'},
  ]

  tipos =[
    {id: 1,tipo: 'Interno'},
    {id: 2,tipo: 'Externo'}    
  ]
  constructor() { }

  ngOnInit() {
  }

}
