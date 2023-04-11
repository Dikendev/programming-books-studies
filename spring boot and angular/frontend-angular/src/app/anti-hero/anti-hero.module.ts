import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/pages/form/form.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AntiHeroModule { }
