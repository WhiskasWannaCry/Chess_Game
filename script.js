import { whiteChesses, blackChesses } from "./chess.js";

const field = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];

let whiteMoves = 0;
let blackMoves = 0;

const drawField = () => {
	document.body.innerHTML = ` `;
	document.body.innerHTML += `<div class="container_lose_black"></div>`;
	document.body.innerHTML += `<div id="container_chess" class="container_chess"></div>`;
	field.forEach((row, rowIdx) => {
		document.getElementById('container_chess').innerHTML += `
		<div class="container_row">
		${row.map((elem, elemIdx) => {
			if (elem === 1) {
				return `<div class="block_container"><div class="radius"></div></div> `
			}
			let currentElem = [...whiteChesses, ...blackChesses].find(elem => {
				return elem.position.row === rowIdx && elem.position.col === elemIdx
			})
			return `<div class="block_container">${currentElem ?
				drawChess(currentElem) : ''}</div> `
		}).join('')}
		</div>`
	})
	document.body.innerHTML += `<div div class="container_lose_white"></div>`;
}

drawField()

const updateFieldArray = () => {
	field.forEach(row => {
		row.fill(0)
	})
}

const pawnRenderVariation = (chess) => {
	if (chess.color === "white") {
		updateFieldArray()
		field[chess.position.row - 1][chess.position.col] = 1;
		field[chess.position.row - 2][chess.position.col] = 1;
	}
	else {
		updateFieldArray()
		field[chess.position.row + 1][chess.position.col] = 1;
		field[chess.position.row + 2][chess.position.col] = 1;
	}
}

window.clickHandler = (id) => {
	let currentElem = [...whiteChesses, ...blackChesses].find(elem => elem.id === id)
	switch (currentElem.type) {
		case "pawn":
			pawnRenderVariation(currentElem)
			break;
	}
	drawField()
}

function drawChess(chess) {
	return `<img  onclick="window.clickHandler('${chess.id}')" class="chess_${chess.color}_img" src="./chesses/${chess.type}.png"></img>`
}

