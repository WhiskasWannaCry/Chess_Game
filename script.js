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

let whiteChesses = [
	{
		id: "white_queen",
		color: "white",
		type: "queen",
		position: {
			row: 7,
			col: 3,
		}
	},
	{
		id: "white_king",
		color: "white",
		type: "king",
		position: {
			row: 7,
			col: 4,
		}
	},
	{
		id: "white_bishop_left",
		color: "white",
		type: "bishop",
		position: {
			row: 7,
			col: 2
		}
	},
	{
		id: "white_bishop_right",
		color: "white",
		type: "bishop",
		position: {
			row: 7,
			col: 5,
		}
	},
	{
		id: "white_knight_left",
		color: "white",
		type: "knight",
		position: {
			row: 7,
			col: 1,
		}
	},
	{
		id: "white_knight_right",
		color: "white",
		type: "knight",
		position: {
			row: 7,
			col: 6,
		}
	},
	{
		id: "white_rook_left",
		color: "white",
		type: "rook",
		position: {
			row: 7,
			col: 0,
		}
	},
	{
		id: "white_rook_right",
		color: "white",
		type: "rook",
		position: {
			row: 7,
			col: 7,
		}
	},
	{
		id: "white_pawn_1",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 0,
		}
	},
	{
		id: "white_pawn_2",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 1,
		}
	},
	{
		id: "white_pawn_3",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 2,
		}
	},
	{
		id: "white_pawn_4",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 3,
		}
	},
	{
		id: "white_pawn_5",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 4,
		}
	},
	{
		id: "white_pawn_6",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 5,
		}
	},
	{
		id: "white_pawn_7",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 6,
		}
	},
	{
		id: "white_pawn_8",
		color: "white",
		type: "pawn",
		position: {
			row: 6,
			col: 7,
		}
	},
];

let blackChesses = [
	{
		id: "black_queen",
		color: "black",
		type: "queen",
		position: {
			row: 0,
			col: 3,
		}
	},
	{
		id: "black_king",
		color: "black",
		type: "king",
		position: {
			row: 0,
			col: 4,
		}
	},
	{
		id: "black_bishop_left",
		color: "black",
		type: "bishop",
		position: {
			row: 0,
			col: 2
		}
	},
	{
		id: "black_bishop_right",
		color: "black",
		type: "bishop",
		position: {
			row: 0,
			col: 5,
		}
	},
	{
		id: "black_knight_left",
		color: "black",
		type: "knight",
		position: {
			row: 0,
			col: 1,
		}
	},
	{
		id: "black_knight_right",
		color: "black",
		type: "knight",
		position: {
			row: 0,
			col: 6,
		}
	},
	{
		id: "black_rook_left",
		color: "black",
		type: "rook",
		position: {
			row: 0,
			col: 0,
		}
	},
	{
		id: "black_rook_right",
		color: "black",
		type: "rook",
		position: {
			row: 0,
			col: 7,
		}
	},
	{
		id: "black_pawn_1",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 0,
		}
	},
	{
		id: "black_pawn_2",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 1,
		}
	},
	{
		id: "black_pawn_3",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 2,
		}
	},
	{
		id: "black_pawn_4",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 3,
		}
	},
	{
		id: "black_pawn_5",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 4,
		}
	},
	{
		id: "black_pawn_6",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 5,
		}
	},
	{
		id: "black_pawn_7",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 6,
		}
	},
	{
		id: "black_pawn_8",
		color: "black",
		type: "pawn",
		position: {
			row: 1,
			col: 7,
		}
	},
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