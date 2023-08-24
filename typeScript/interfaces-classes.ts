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
// console.log(school.getStudentNames());

// E-Commerce System - Product and ShoppingCart

class Product {
	constructor(public id: number, public name: string, public price: number) {}
}

interface CartItem {
	product: Product;
	quantity: number;
}

class ShoppingCart {
	private items: CartItem[] = [];

	addItem(product: Product, quantity: number): void {
		this.items.push({ product, quantity });
	}

	getTotal(): number {
		return this.items.reduce(
			(total, item) => total + item.product.price * item.quantity,
			0
		);
	}
}

const lapTop = new Product(1, "lapTop", 2000);
const note = new Product(2, "gamr", 1000);
const cart = new ShoppingCart();
cart.addItem(lapTop, 1);
cart.addItem(note, 2);
console.log(cart.getTotal());
console.log(JSON.stringify(cart, null, 2));

// Social Media Platform - User and Post

class User {
	constructor(public id: number, public username: string) {}
}

interface Post {
	id: number;
	author: User;
	content: string;
	likes: string;
}

class SocialMediaPlatform {
	private users: User[] = [];
	private posts: Post[] = [];

	addUser(user: User): void {
		this.users.push(user);
	}
}
const user1 = new User(1, "Diego");
const newUsers = new SocialMediaPlatform();
newUsers.addUser(user1);
console.log(newUsers);
