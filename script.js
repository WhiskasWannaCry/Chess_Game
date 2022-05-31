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

const drawField = () => {
	document.body.innerHTML = ` `;
	document.body.innerHTML += `<div class="container_lose_black"></div>`;
	document.body.innerHTML += `<div id="container_chess" class="container_chess"></div>`;
	field.forEach((row, rowIdx) => {
		document.getElementById('container_chess').innerHTML += `
		<div class="container_row">
		${row.map((elem, elemIdx) => {
			let currentElem = [...whiteChesses, ...blackChesses].find(elem => {
				return elem.position.row === rowIdx && elem.position.col === elemIdx
			})
			return `<div class="block_container">${currentElem ?
				drawChess(currentElem.type, currentElem.color) : ''}</div> `
		}).join('')}
		</div>`
	})
	document.body.innerHTML += `<div div class="container_lose_white"></div>`;
}

drawField()

function drawChess(chessType, chessColor) {
	// if (chessType === "queen") {
	// 	return `<img src="./white_chess/queen.png">`
	// }
	console.log(chessColor)
	return `<img class="chess_${chessColor}_img" src="./chesses/${chessType}.png"></img>`
}