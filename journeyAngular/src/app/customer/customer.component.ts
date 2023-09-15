import { Component } from "@angular/core";
import { Customer } from "./customer";

@Component({
	selector: "customer",
	templateUrl: "./customer.component.html",
})
export class CustomerComponent {
	Customers: Array<Customer>;
	constructor() {
		this.Customers = new Array<Customer>();
		this.Customers.push(new Customer("Diego", "Kennedy"));
		this.Customers.push(new Customer("Cristina", "Freitas"));
		this.Customers.push(new Customer("Joy", "dog"));
	}
}
