import { Component, OnDestroy, OnInit } from '@angular/core';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  dtOptions: DataTables.Settings = {};    
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',      
      pageLength: 10,
    };
  }
}
