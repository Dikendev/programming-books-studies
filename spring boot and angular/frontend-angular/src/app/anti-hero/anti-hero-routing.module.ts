import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/pages/form/form.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: " ",
    component: ListComponent,
  },
  {
    path: "form",
    component: FormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AntiHeroRoutingModule { }
