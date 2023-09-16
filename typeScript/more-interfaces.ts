export {};

interface Vehicle {
	make: string;
}

// class with constructors parameters with accessors
class Car implements Vehicle {
	constructor(public make: string, public model: string) {
		this.make = make;
		this.model = model;
	}
}

interface Exception {
	message: string;
	id?: number;
}

interface ErrorHandle {
	exceptions: Exception[];
	logException(message: string, id?: number): void;
}

interface ExceptionHandleSettings {
	logAllException: boolean;
}

class CustomErrorHandler implements ErrorHandle {
	exceptions: Exception[] = [];
	logAllException: boolean;

	constructor(settings: ExceptionHandleSettings) {
		this.logAllException = settings.logAllException;
	}

	logException(message: string, id?: number): void {
		this.exceptions.push({ message, id });
	}
}

interface A {
	a: number;
}

const instance = { a: 3 } as A;
instance.a = 5;

// >
interface DatabaseService {
	save(order: Order): void;
}

class Order {}
class OrderProcessor {
	constructor(private databaseService: DatabaseService) {}

	process(order: Order) {
		this.databaseService.save(order);
	}
}

let orderProcessor = new OrderProcessor(mockLibrary.mock<DatabaseService>());
orderProcessor.process(new Order());

const databseServiceInstance = {} as DatabaseService;
