import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DirectiveNameComponent } from './directive/directive-name/directive-name.component';
import { PipeNameComponent } from './pipes/pipe-name/pipe-name.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DirectiveNameComponent,
    PipeNameComponent
  ],
  exports: [NavbarComponent, FooterComponent],
  imports: [CommonModule],
})
export class SharedModule { }
