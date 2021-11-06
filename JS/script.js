const wordInput = document.getElementById("wordInput")
const wordCounter = document.getElementById("wordCounterText")
const charCounter = document.getElementById("charCounterText")
const cb = document.getElementById("inTextCitationIgnore")

let wordInputText
let cbState

wordInput.addEventListener("input", count)

cb.addEventListener("change", () => {
	ignoreCiteState(wordInputText)
	countWords(wordInputText)
	countChar(wordInputText)
})

function count() {
	wordInputText = wordInput.value
	console.log(wordInputText)
	ignoreCiteState(wordInputText)
	countWords(wordInputText)
	countChar(wordInputText)
}

function ignoreCiteState(str) {
	//console.log(cbState)
	cbState = cb.checked

	if (cbState) {
		wordInputText = str.replace(/ *\([^)]*\) */g, "")
	} else wordInputText = wordInput.value

	return wordInputText
}

function countWords(str) {
	let wordsArray = str.replace(/\n/g, " ").split(" ").filter((i) => i !== "")
	let wordNum = wordsArray.length

	console.log(wordsArray)
	console.log(wordNum)

	wordCounter.innerHTML = `${wordNum}`
}

function countChar(str) {
	let charArray = str.replace(/\n/g, "").split("").filter((i) => i !== "")
	let charNum = str.replace(/\n/g, "").split("").filter((i) => i !== "").length

	console.log(charArray)
	console.log(charNum)

	charCounter.innerHTML = `${charNum}`
}
