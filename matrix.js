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
		'Я', 'Ɔ', 'ᗡ', 'Ǝ',
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
		'ュ',
		'ー',
		'タ', '｡', '｢', '｣', '､', '･', 'ｦ', 'ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｬ', 'ｭ', 'ｮ', 'ｯ', 'ｰ', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ﾝ', 'ﾞ', 'ﾟ',
	],
	messageX: 10,
	messageY: 20,
	message: 'THE MATRIX'
}

const getNegativeRandomInt = (max) => getRandomInt(max) * -1
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))
const getRandomChar = () => config.chars[getRandomInt(config.chars.length)]

function setup() {
	frameRate(10);
	createCanvas(config.width, config.height)
	background(45, 255, 94)

	fill(0, 0, 0, 222)
	rect(0, 0, config.width, config.height)

	//textFont(loadFont('share-tech-mono.otf'))
	textSize(20)
	textAlign(CENTER, CENTER)

	setTimeout(drawLetters, config.redraw)
}

function draw() {
	fill(0, 0, 0, 30)
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
		y[index] = getNegativeRandomInt(8) * config.spacingY
	}

	let char = getRandomChar()

	if (y[index] !== config.messageY * config.spacingY) {
		if (y[index] > 0) {



			fill(45, 255, 94)

			text(last[index], index * config.spacingX + config.spacingX / 2, y[index])



		}

		y[index] = incrementY(y[index])


		if (y[index] > 0) {


			//}
			//fill(100)

			//textSize(22)
			//text(char, index * config.spacingX, y[index])
			if (y[index] === config.messageY * config.spacingY) {
				const temp = config.message.charAt(index - config.messageX)
				if (temp && temp !== ' ') {
					char = temp
				} else {
					y[index] += 1;
				}
			}

			fill(255)

			textSize(21)

			text(char, index * config.spacingX + config.spacingX / 2, y[index])

			last[index] = char
		}
	} else {

		fill(255)

		textSize(21)

		text(last[index], index * config.spacingX + config.spacingX / 2, y[index])


	}
}
