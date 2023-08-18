// Using interfaces for Complex Data structure instead of relying solely on tuples
interface Point {
	x: number;
	y: number;
}

function calculateDistanceFromOrigin(point: Point): number {
	return Math.sqrt(point.x ** 2 + point.y ** 2);
}

const myPoint: Point = { x: 3, y: 4 };
const distance = calculateDistanceFromOrigin(myPoint);
console.log(distance);
