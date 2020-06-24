import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Region from 'src/app/models/region.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() data: [];
  @Input() label: string;
  @Input() name: string;
  @Input() isDisabled ? = false;
  @Output() changedSelection: EventEmitter<Region> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeDropdown(element: HTMLSelectElement) {
    const { value } = element;
    this.changedSelection.emit({ name: value });
  }

}
