export {};
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
	likes: number;
}

class SocialMediaPlatform {
	private users: User[] = [];
	private posts: Post[] = [];

	addUser(user: User): void {
		const newUser = {
			id: (user.id = this.users.length + 1),
			username: user.username,
		};

		this.users.push(newUser);
	}

	createPost(author: User, content: string): void {
		const newPost: Post = {
			id: this.posts.length + 1,
			author,
			content,
			likes: 0,
		};
		this.posts.push(newPost);
	}

	getPostsByUser(user: User): Post[] {
		return this.posts.filter((post) => post.author.id === user.id);
	}

	giveLike(user: User): void {
		if (user) {
			this.posts[0].likes++;
		}
	}
}
const user1 = new User(1, "Diego");
const user2 = new User(1, "Cristina");
const user3 = new User(1, "LeroLero");
const platform = new SocialMediaPlatform();
platform.addUser(user1);
platform.addUser(user2);
platform.addUser(user3);
platform.createPost(user1, "Hello World");
platform.giveLike(user1);
platform.giveLike(user1);
console.log(platform.getPostsByUser(user1));
console.log(platform);

// Task Management System - Task and User

enum TaskStatus {
	Open,
	InProgress,
	Completed,
}

class Task {
	constructor(
		public id: number,
		public title: string,
		public assignee: UserAssignee,
		public status: TaskStatus
	) {}
}

interface UserAssignee {
	id: number;
	name: string;
}

class TaskManagementSystem {
	private task: Task[] = [];

	createTask(title: string, assignee: UserAssignee): Task {
		const newTask = new Task(
			this.task.length + 1,
			title,
			assignee,
			TaskStatus.InProgress
		);
		this.task.push(newTask);
		return newTask;
	}

	getTaskAssignee(assignee: UserAssignee): Task[] {
		return this.task.filter((task) => task.assignee.id === assignee.id);
	}
}

const user01: UserAssignee = { id: 1, name: "Diego" };
const user02: UserAssignee = { id: 2, name: "Cristina" };

const taskSystem = new TaskManagementSystem();
taskSystem.createTask("Implement feature X", user01);
taskSystem.getTaskAssignee(user01);
