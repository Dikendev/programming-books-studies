interface InnerObj {
	case: number;
	agora: number;
	max: number;
	min: number;
}

interface MiddleObj {
	[key: string]: InnerObj;
}
interface ObjTest {
	[key: string]: MiddleObj;
}

const objects: ObjTest = {
	"153": {
		"2222": {
			case: 20,
			agora: 230,
			max: 30,
			min: 10,
		},
		"22292": {
			case: 20,
			agora: 20,
			max: 60,
			min: 40,
		},
		"2111192": {
			case: 30,
			agora: 19,
			max: 30,
			min: 60,
		},
	},
	"143": {
		"2222": {
			case: 20,
			agora: 230,
			max: 70,
			min: 20,
		},
		"22292": {
			case: 20,
			agora: 20,
			max: 80,
			min: 80,
		},
		"222792": {
			case: 30,
			agora: 19,
			max: 70,
			min: 60,
		},
	},
};

const keys = Object.keys(objects);
let newConfig: any = {};

for (const key of keys) {
	const groupById = objects[key];
	console.log("key", key);

	let newConfig: any = {};
	for (const groupId in groupById) {
		console.log("grouptId", groupId);

		const config = groupById[groupId];
		console.log("config", config);

		const newcase = config.case;

		if (!key[newcase]) {
			key[newcase] = newConfigj;
		}
	}

	console.log("newConfig", newConfig);
}
