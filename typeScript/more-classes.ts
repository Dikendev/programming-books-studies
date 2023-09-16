export {};
class Car {
	distanceRun: number = 0;
	private color: string;

	constructor(private isHybrid: boolean, color: string) {
		this.color = color;
	}

	getGasConsumption(): string {
		return this.isHybrid ? "Very low" : "Too high!";
	}

	drive(distance: number): void {
		this.distanceRun += distance;
	}

	static honk(): string {
		return "Hoooook!";
	}

	get distance(): number {
		return this.distanceRun;
	}
}
