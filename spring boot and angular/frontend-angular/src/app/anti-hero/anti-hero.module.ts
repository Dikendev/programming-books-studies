import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntiHeroRoutingModule } from './anti-hero-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/pages/form/form.component';
import { AntiHeroListComponent } from './components/anti-hero-list/anti-hero-list.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    AntiHeroListComponent
  ],
  imports: [
    CommonModule,
    AntiHeroRoutingModule
  ]
})
export class AntiHeroModule { }
