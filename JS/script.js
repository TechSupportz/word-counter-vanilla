const wordInput = document.getElementById("wordInput")
const wordCounter = document.getElementById("wordCounterText")
const charCounter = document.getElementById("charCounterText")

let wordInputText

wordInput.addEventListener("input", count)

function count() {
	wordInputText = wordInput.value

	countWords(wordInputText)
	countChar(wordInputText)
}

function countWords(str) {
	let wordNum = str.split(" ").length
	console.log(str.split(" "))

	wordCounter.innerHTML = `${wordNum}`
}

function countChar(str) {
	let charNum = str.split("").length

	charCounter.innerHTML = `${charNum}`
}
