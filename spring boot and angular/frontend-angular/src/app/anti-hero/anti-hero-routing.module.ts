import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/pages/form/form.component';

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
  declarations: [ListComponent, FormComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntiHeroRoutingModule { }
