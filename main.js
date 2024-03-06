const inputElement = document.querySelector("#inputNumber")
inputElement.value = 0
const btnPlay = document.querySelector("#btnPlay")
const btnPlayAgain = document.querySelector("#btnPlayAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const wrongMessage = document.querySelector("#wrong-message")

let drawnNumber = drawNewNumber() 
let attempts = 1

function drawNewNumber() {
  return Math.round(Math.random() * 10, 0)
}

function play(event) {
  event.preventDefault()  
  const inputNumber = Number(inputElement.value)

  if(inputNumber === drawnNumber) {
    inputElement.value = 0
    document.querySelector("h2").innerText = `Acertou! Foram ${attempts} tentativas.`
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    return 
  } 

  attempts++      
  wrongMessage.classList.remove("wrong-answer");
  void wrongMessage.offsetWidth;
  wrongMessage.classList.add("wrong-answer");
  wrongMessage.classList.remove("hide");
}

function playAgain(event) {
  event.preventDefault()
  drawnNumber = drawNewNumber()
  attempts = 1
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  wrongMessage.classList.add("hide")
}

function validateInput() {
  const inputNumber = inputElement.value
  if(inputNumber < 0){
    inputElement.value = 0
  } else if(inputNumber > 10){
    inputElement.value = 10
  }
}

inputElement.addEventListener("input", validateInput)
btnPlay.addEventListener("click", play)
btnPlayAgain.addEventListener("click", playAgain)