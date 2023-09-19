import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ProductsModule } from "./products/products.module";
import { CopyrightDirective } from "./copyright.directive";
import { NumericDirective } from './numeric.directive';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@NgModule({
	declarations: [AppComponent, CopyrightDirective, NumericDirective, MaintenanceComponent, KeyLoggerComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, ProductsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
