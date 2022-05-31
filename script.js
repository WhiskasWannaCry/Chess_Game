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
let selectedChess;

const drawField = () => {
	document.body.innerHTML = ` `;
	// document.body.innerHTML += `<div class="container_lose_black"></div>`;
	document.body.innerHTML += `<div id="container_chess" class="container_chess"></div>`;
	field.forEach((row, rowIdx) => {
		document.getElementById('container_chess').innerHTML += `
		<div class="container_row">
		${row.map((elem, elemIdx) => {
			let currentElem = [...whiteChesses, ...blackChesses].find(elem => {
				return elem.position.row === rowIdx && elem.position.col === elemIdx
			})
			if (elem === 1) {
				return `<div class="block_container">
					<div class="handlerForRadius" onclick="window.clickHandlerForRadius(${rowIdx},${elemIdx})">
						<div class="radius"></div>
					</div>
				</div> `
			}
			return `<div class="block_container">${currentElem ?
				drawChess(currentElem) : ''}</div> `
		}).join('')}
		</div>`
	})
	// document.body.innerHTML += `<div div class="container_lose_white"></div>`;
}

drawField()

const updateFieldArray = () => {
	field.forEach(row => {
		row.fill(0)
	})
}

const changePawnPos = (chess, operation) => {
	field[operation][chess.position.col] = 1;
	field[operation][chess.position.col] = 1;
	selectedChess = chess;
}

const pawnRenderVariation = (chess) => {
	if (chess.color === "white") {
		updateFieldArray()
		if (chess.position.row === 6) {
			changePawnPos(chess, chess.position.row - 1)
			changePawnPos(chess, chess.position.row - 2)

		}
		else {
			changePawnPos(chess, chess.position.row - 1)
		}
	}
	else {
		updateFieldArray()
		if (chess.position.row === 1) {
			changePawnPos(chess, chess.position.row + 1)
			changePawnPos(chess, chess.position.row + 2)
		}
		else {
			changePawnPos(chess, chess.position.row + 1)
		}
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

window.clickHandlerForRadius = (rowRadius, columnRadius) => {
	if (selectedChess.color === "white") {
		if (rowRadius + 1 === selectedChess.position.row) {
			selectedChess.position.row -= 1;
		}
		else {
			selectedChess.position.row -= 2;
		}
	}
	else {
		if (rowRadius - 1 === selectedChess.position.row) {
			selectedChess.position.row += 1;
		}
		else {
			selectedChess.position.row += 2;
		}
	}
	updateFieldArray()
	drawField()

}

function drawChess(chess) {
	return `<img  onclick="window.clickHandler('${chess.id}')" class="chess_${chess.color}_img" src="./chesses/${chess.type}.png"></img>`
}

