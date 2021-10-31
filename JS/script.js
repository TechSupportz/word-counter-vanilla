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
	//console.log(cbState)
	cbState = cb.checked

	if (cbState) {
		wordInputText = str.replace(/ *\([^)]*\) */g, "")
	} else wordInputText = wordInput.value

	return wordInputText
}

function countWords(str) {
	str = str.replace(/\n/g, ' ')
	let wordsArray = str.split(" ")
	wordsArrayFilter = wordsArray.filter((i) => i !== "")
	
	let wordNum = wordsArrayFilter.length
	console.log(wordsArrayFilter)
	console.log(wordNum)

	wordCounter.innerHTML = `${wordNum}`
}

function countChar(str) {
	let charNum = str.split("").length

	charCounter.innerHTML = `${charNum}`
}
