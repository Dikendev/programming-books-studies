export {};

function method<T>(args: T): T {
	console.log(args);
	return args;
}
method<number>(1);
method<string>("hello generics");
