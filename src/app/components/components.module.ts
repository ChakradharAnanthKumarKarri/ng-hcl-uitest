import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [DropdownComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [DropdownComponent, TableComponent]
})
export class ComponentsModule { }
