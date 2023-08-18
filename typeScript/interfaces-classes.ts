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
// console.log(distance);

class Book {
	constructor(
		public title: string,
		public author: string,
		public publicationYear?: number
	) {}

	getDetails(): string {
		return `${this.title} by ${this.author}${
			this.publicationYear ? `, ${this.publicationYear}` : ""
		}`;
	}
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

// console.log(book1.getDetails());
// console.log(book2.getDetails());

interface Student {
	id: number;
	name: string;
	courses: string[];
}

class School {
	private students: Student[] = [];

	enrollStudent(student: Student): void {
		this.students.push(student);
	}

	getStudentNames(): string[] {
		return this.students.map((student) => student.name);
	}
}

const school = new School();
const student1: Student = {
	id: 1,
	name: "Cris",
	courses: ["Math", "Science"],
};
const student2: Student = {
	id: 2,
	name: "Diego",
	courses: ["History", "English"],
};

school.enrollStudent(student1);
school.enrollStudent(student2);
console.log(school.getStudentNames());
