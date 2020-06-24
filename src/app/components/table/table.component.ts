import { Component, OnInit, Input } from '@angular/core';
import Country from '../../models/country.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: Country;

  constructor() { }

  ngOnInit(): void {
  }

}
