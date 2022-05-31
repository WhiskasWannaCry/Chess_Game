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
			let findElem = [...whiteChesses, ...blackChesses].find(elem => {
				return elem.position.row === rowIdx && elem.position.col === elemIdx
			})
			return `<div class="block_container">${findElem ?
				drawChess(findElem.type) : ''}</div> `
		}).join('')}
		</div>`
	})
	document.body.innerHTML += `<div div class="container_lose_white"></div>`;
}

drawField()

function drawChess(chessType) {
	// if (chessType === "queen") {
	// 	return `<img src="./white_chess/queen.png">`
	// }
	console.log(chessType)
	return `<div>${chessType}</div>`
}