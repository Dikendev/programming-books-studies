export {};

/**
 * Partial
 */
interface Hero {
	name: string;
	power: number;
}

const hero: Partial<Hero> = {
	name: "Superman",
};
