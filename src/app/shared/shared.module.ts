import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [   
    SidebarComponent,
     ButtonComponent,
    TableComponent,
    DropdownComponent,
    HeaderComponent,
    ModalComponent,],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ButtonComponent,
    HeaderComponent,
    TableComponent,
    DropdownComponent,],
})
export class SharedModule { }
