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
let allChesses = [...whiteChesses, ...blackChesses];
let selectedChess;
let turn = "white";

const drawField = () => {
	document.body.innerHTML = ` `;
	// document.body.innerHTML += `<div class="container_lose_black"></div>`;
	document.body.innerHTML += `<div id="container_chess" class="container_chess"></div>`;
	field.forEach((row, rowIdx) => {
		document.getElementById('container_chess').innerHTML += `
		<div class="container_row">
		${row.map((elem, elemIdx) => {
			let currentElem = allChesses.find(elem => {
				return elem.position.row === rowIdx && elem.position.col === elemIdx
			})
			if (elem === 2) {
				return `<div class="block_container_red" onclick="window.clickHandlerForFight(${rowIdx},${elemIdx})">${currentElem ?
					drawChess(currentElem) : ''}</div> `
			}
			if (elem === 1) {
				return `<div class="block_container">
					<div class="handlerForRadius" onclick="window.clickHandlerForRadius(${rowIdx},${elemIdx}),${elem}">
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

const setRadiusIdxForPawnsVariation = (chess, operation) => {
	let chessValid = [...whiteChesses, ...blackChesses].find(elem => elem.position.row === chess.position.row + operation &&
		elem.position.col === chess.position.col)
	if (!chessValid) {
		field[chess.position.row + operation][chess.position.col] = 1;
	}
	selectedChess = chess;
}

const pawnDanger = (pawn) => {
	if (pawn.color === "white") {
		blackChesses.forEach(elem => {
			if ((selectedChess.position.row - 1 === elem.position.row
				&& selectedChess.position.col + 1 === elem.position.col) ||
				(selectedChess.position.row - 1 === elem.position.row
					&& selectedChess.position.col - 1 === elem.position.col)) {
				field[elem.position.row][elem.position.col] = 2;
			}
		})
	}
	else if (pawn.color === "black") {
		whiteChesses.forEach(elem => {
			if ((selectedChess.position.row + 1 === elem.position.row
				&& selectedChess.position.col + 1 === elem.position.col) ||
				(selectedChess.position.row + 1 === elem.position.row
					&& selectedChess.position.col - 1 === elem.position.col)) {
				field[elem.position.row][elem.position.col] = 2;
			}
		})
	}
}

const pawnRenderVariation = (pawn) => {
	if (turn === "white") {
		if (pawn.color === "white") {
			updateFieldArray()
			if (pawn.position.row === 6) {
				setRadiusIdxForPawnsVariation(pawn, - 1)
				setRadiusIdxForPawnsVariation(pawn, - 2)
				pawnDanger(pawn)
			}
			else {
				setRadiusIdxForPawnsVariation(pawn, - 1)
				pawnDanger(pawn)
			}
		}

	}
	else {
		if (pawn.color === "black") {
			updateFieldArray()
			if (pawn.position.row === 1) {
				setRadiusIdxForPawnsVariation(pawn, + 1)
				setRadiusIdxForPawnsVariation(pawn, + 2)
				pawnDanger(pawn)
			}
			else {
				setRadiusIdxForPawnsVariation(pawn, + 1)
				pawnDanger(pawn)
			}

		}
	}
}

// Не сделано
const rookRenderVariation = (rook) => {
	console.log(rook)
}

window.clickHandler = (id) => {
	let currentElem = [...whiteChesses, ...blackChesses].find(elem => elem.id === id)
	switch (currentElem.type) {
		case "pawn":
			pawnRenderVariation(currentElem)
			break;
		case "rook":
			rookRenderVariation(currentElem)
			break;
		case "knight":
			console.log(currentElem);
			break;
		case "bishop":
			console.log(currentElem);
			break;
		case "queen":
			console.log(currentElem);
			break;
		case "king":
			console.log(currentElem);
			break;
	}
	drawField()
}

window.clickHandlerForRadius = (rowRadius, columnRadius) => {
	if (selectedChess.color === "white") {
		if (rowRadius + 1 === selectedChess.position.row) {
			selectedChess.position.row -= 1;
			updateFieldArray()
		}
		else {
			selectedChess.position.row -= 2;
			updateFieldArray()
		}
		turn = "black";
	}
	else {
		if (rowRadius - 1 === selectedChess.position.row) {
			selectedChess.position.row += 1;
			updateFieldArray()
		}
		else {
			selectedChess.position.row += 2;
			updateFieldArray()
		}
		turn = "white";
	}
	drawField()
}

window.clickHandlerForFight = (rowDanger, columnDanger) => {
	let clickedDangerElem = allChesses.find(elem => {
		return elem.position.row === rowDanger && elem.position.col === columnDanger
	})
	allChesses = allChesses.filter(elem => elem != clickedDangerElem)
	selectedChess.position.row = clickedDangerElem.position.row;
	selectedChess.position.col = clickedDangerElem.position.col;
	if (selectedChess.color === "white") {
		turn = "black"
	}
	else {
		turn = "white"
	}
	updateFieldArray()
	drawField()
}

function drawChess(chess) {
	return `<img  onclick="window.clickHandler('${chess.id}')" class="chess_${chess.color}_img" src="./chesses/${chess.type}.png"></img>`
}