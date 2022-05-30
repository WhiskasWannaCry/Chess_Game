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

let chesses = [
	{
		color: "white",
		type: "queen",
		position: {
			row: 7,
			col: 4,
		}
	},
	{
		color: "white",
		type: "king",
		position: {
			row: 7,
			col: 3,
		}
	},
	{
		color: "white",
		type: "bishopLeft",
		position: {
			row: 7,
			col: 2
		}
	},
	{
		color: "white",
		type: "bishopRight",
		position: {
			row: 7,
			col: 5,
		}
	},
	{
		color: "white",
		type: "knightLeft",
		position: {
			row: 7,
			col: 1,
		}
	},
	{
		color: "white",
		type: "knightRight",
		position: {
			row: 7,
			col: 6,
		}
	},
	{
		color: "white",
		type: "rookLeft",
		position: {
			row: 7,
			col: 0,
		}
	},
	{
		color: "white",
		type: "rookright",
		position: {
			row: 7,
			col: 7,
		}
	},
	{
		color: "white",
		type: "rookright",
		position: {
			row: 7,
			col: 7,
		}
	},
];

const drawField = () => {
	document.body.innerHTML = ` `;
	document.body.innerHTML += `<div class="container_lose_black"></div>`;
	document.body.innerHTML += `<div id="container_chess" class="container_chess"></div>`;
	field.forEach(row => {
		document.getElementById('container_chess').innerHTML += `
		<div class="container_row">
		${row.map(elem => {
			if (elem === 0) {
				return `<div class="block_container"></div>`
			}
		}).join('')}
		</div>`
	})
	document.body.innerHTML += `<div class="container_lose_white"></div>`;
}

drawField()