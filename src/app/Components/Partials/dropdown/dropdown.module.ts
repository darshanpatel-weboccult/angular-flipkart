import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownDirective } from 'src/app/Shared/dropdown.directive';

@NgModule({
  declarations: [DropdownComponent, DropdownDirective],
  imports: [CommonModule, FontAwesomeModule],
  exports: [DropdownComponent, DropdownDirective],
})
export class DropdownModule {}
