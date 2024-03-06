const inputElement = document.querySelector("#inputNumber")
inputElement.value = 0
const btnPlay = document.querySelector("#btnPlay")
const btnPlayAgain = document.querySelector("#btnPlayAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const errorMessage = document.querySelector("#error-message")
let drawnNumber = drawNewNumber() 
let attempts = 1

document.addEventListener("keydown", (e) => {
  if(e.key === "Enter" && screen1.classList.contains("hide")){
    playAgain()
  }
})
inputElement.addEventListener("input", validateInput)
btnPlay.addEventListener("click", play)
btnPlayAgain.addEventListener("click", playAgain)

function drawNewNumber() {
  return Math.round(Math.random() * 10, 0)
}

function play(event) {
  event.preventDefault()  
  const inputNumber = Number(inputElement.value)

  if(inputNumber === drawnNumber) {
    inputElement.value = 0
    document.querySelector("h2").innerText = `Acertou! Foram ${attempts} tentativas.`
    toggleScreen()
    return 
  } 

  attempts++      
  showErrorMessage()
}

function showErrorMessage() {
  errorMessage.classList.remove("error-answer");
  void errorMessage.offsetWidth;
  errorMessage.classList.add("error-answer");
  errorMessage.classList.remove("hide");
}

function playAgain() {
  drawnNumber = drawNewNumber()
  attempts = 1
  errorMessage.classList.add("hide")
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function validateInput() {
  const inputNumber = inputElement.value
  if(inputNumber < 0){
    inputElement.value = 0
  } else if(inputNumber > 10){
    inputElement.value = 10
  }
}
