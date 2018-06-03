const config = {
	width: window.innerWidth,
	height: window.innerHeight,
	redraw: 80,
	spacingX: 20,
	spacingY: 20,
	chars: [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		'+',
		'M',
		'A',
		'T',
		'R',
		'I',
		'X',
		'る',
		'見',
		'い',
		'白',
		'か',
		'っ',
		'た',
		'可',
		'べ',
		'て',
		'み',
		'コ',
		'ン',
		'ピ',
		'ュ',
		'ー',
		'タ'
	],
	mono: loadFont('share-tech-mono.otf')
}

const getNegativeRandomInt = (max) => getRandomInt(max) * -1
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))
const getRandomChar = () => config.chars[getRandomInt(config.chars.length)]

function setup() {
	createCanvas(config.width, config.height)
	background(45, 255, 94)

	fill(0, 0, 0, 222)
	rect(0, 0, config.width, config.height)

	textSize(20)
	textAlign(CENTER, CENTER)

	setTimeout(drawLetters, config.redraw)
}

function draw() {
	fill(0, 0, 0, 5)
	rect(0, 0, config.width, config.height)
}

const incrementY = (y) => (y < config.height ? y + config.spacingX : 0)

let y = []
let last = []

const drawLetters = () => {
	setTimeout(drawLetters, config.redraw)
	for (let index = 0; index < config.width / config.spacingX; index++) {
		drawLetter(index)
	}
}

const drawLetter = (index) => {
	if (!y[index]) {
		y[index] = getNegativeRandomInt(40 * config.spacingY)
	}

	let char = getRandomChar()

	fill(45, 255, 94)

	text(last[index], index * config.spacingX, y[index])

	y[index] = incrementY(y[index])

	//fill(100)

	//textSize(22)
	//text(char, index * config.spacingX, y[index])

	fill(255)

	textSize(21)

	text(char, index * config.spacingX, y[index])

	last[index] = char
}
