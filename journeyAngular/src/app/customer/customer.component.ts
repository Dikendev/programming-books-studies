import { Component } from "@angular/core";
import { Customer } from "./customer";

@Component({
	selector: "customer",
	templateUrl: "./customer.component.html",
})
export class CustomerComponent {
	Customers: Array<Customer>;
	isAddNew: boolean;
	constructor() {
		this.isAddNew = false;
		this.Customers = new Array<Customer>();
		this.Customers.push(new Customer("Diego", "Kennedy"));
		this.Customers.push(new Customer("Crbistina", "Freitas"));
		this.Customers.push(new Customer("Joy", "dog"));
	}

	save(): void {
		this.Customers.push(new Customer("David", "Michel"));
	}

	AddNew(): void {
		this.isAddNew = true;
	}

	CancelSubmit(): void {
		this.isAddNew = false;
	}
}
