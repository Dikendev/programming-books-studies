import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerComponent } from "./customer/customer.component";

@NgModule({
	declarations: [AppComponent, CustomerComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
