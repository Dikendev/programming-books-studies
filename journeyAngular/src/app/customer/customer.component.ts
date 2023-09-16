import { Component } from "@angular/core";
import { Customer } from "./customer";

@Component({
	selector: "customer",
	templateUrl: "./customer.component.html",
})
export class CustomerComponent {
	Customers: Array<Customer>;
	isAddNew: boolean;
	FirstName: string = "";
	LastName: string = "";
	constructor() {
		this.FirstName;
		this.LastName;
		this.isAddNew = false;
		this.Customers = new Array<Customer>();
		this.Customers.push(new Customer("Diego", "Kennedy"));
		this.Customers.push(new Customer("Cristina", "Freitas"));
		this.Customers.push(new Customer("Joy", "dog"));
	}

	Save(): void {
		if (!this.FirstName || !this.LastName) return;
		this.Customers.push(new Customer(this.FirstName, this.LastName));
		this.isAddNew = false;
	}

	Reset() {
		this.FirstName = "";
		this.LastName = "";
	}

	AddNew(): void {
		this.isAddNew = true;
	}

	CancelSubmit(): void {
		this.isAddNew = false;
		this.Reset();
	}
}
