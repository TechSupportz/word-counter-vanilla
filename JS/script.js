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

	ignoreCiteState(wordInputText)
	countWords(wordInputText)
	countChar(wordInputText)
}

function ignoreCiteState(str) {
	console.log(cbState)
	cbState = cb.checked
	
	if (cbState) {
		wordInputText = str.replace(/ *\([^)]*\) */g, "")
	} else (
		wordInputText = wordInput.value
	)

	return wordInputText
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
