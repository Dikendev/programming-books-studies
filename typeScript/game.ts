import * as readline from "readline";
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const characterChoices: any = {
	1: "Guerreiro",
	2: "Mago",
};

const itemChoices = {
	"1": "Faca",
	"2": "Livro",
};

const menuOp = {
	"1": "Menu",
	"2": "SAIR",
};

function initGame() {
	getUsername();
	inicio();
}

function inicio() {
	rl.question(
		"Escolha um personagem: 1 para Guerreiro ou 2 para Mago",
		(param): void => {
			const choice = param.toString().toLowerCase();
			if (choice in characterChoices) {
				console.log(`Parabêns você escolheu ${characterChoices[choice]}`);
				getUsername();
			} else {
				console.log(
					"Escolha inválida. Por favor, escolha 1 para Guerreiro ou 2 para Mago."
				);
				initGame();
			}
		}
	);
}
initGame();

function getUsername() {
	rl.question("Qual seu nome Jogador?", (username: string) => {
		console.log(`parabens ${username}`);
	});
}

function historyGame(username: string): void {
	formatLine(15);
	console.log(
		`Um Monstro pegou a pipokinha e você ${username} terá que salva-la`
	);
	let selectedItem = "oi";
	rl.question("Qual item voce pegará para seu inventário?", (item: string) => {
		switch (item) {
			case "1": {
				status(username);
				console.log(`voce escolheu faca`);
				selectedItem = item;
				rl.close();
				break;
			}
			case "2": {
				console.log(`voce escolheu livro? kkk`);
				status(username);
				selectedItem = item;
				rl.close();
				break;
			}
			default: {
				console.log(`esolha um dos dois pfv`);
				selectedItem = item;
				historyGame(username);
				break;
			}
		}
	});
}

function status(username: string) {
	formatLine(15);
	console.log("********************************");
	console.log(`             STATUS             `);
	console.log(`Seu nome é ${username}`);
	console.log(``);
	console.log("********************************");
}

function formatLine(lines: number) {
	for (let i = 0; i < lines; i++) {
		console.log(` `);
	}
}
