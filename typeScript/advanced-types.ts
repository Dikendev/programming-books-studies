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

/**
 * Record
 */

interface Hero2 {
	powers: Record<string, number>;
}
