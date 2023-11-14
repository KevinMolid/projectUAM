import { charactersArr } from '/characters.js'
import { introEvents } from '/gameEvents.js'

const selectionScreen = document.getElementById('selection-screen')

// GameScreen
const gameScreen = document.getElementById('game-screen')
const npcNameEl = document.getElementById('npc-name')
const npcImg = document.getElementById('npc-img')
const playerNameEl = document.getElementById('player-name')
const npcTextEl = document.getElementById('npc-text')

const optionsEl = document.getElementById('options-el')
const nextBtn = document.getElementById('next-btn')
const choice1Btn = document.getElementById('choice1')
const choice2Btn = document.getElementById('choice2')

// Animation
const speed = 50
  
const characterCard = document.getElementById('character-card')

const characterSelection = document.getElementById('character-selection')

const playBtn = document.getElementById('play-btn')

// Player stats
let playerName = ''

// Variables
let currentEventIndex = 0

let index = 0


/* Selection screen */

function renderCharacterSelectionScreen(){
    characterSelection.innerHTML += charactersArr.map(function(character) {
        return `
          <div id='${character.name}'>
            <img src='images/${character.img}' alt=${character.name}>
          </div>
          `
      }).join('')
      
      charactersArr.forEach(function(character){
        document.getElementById(character.name).addEventListener('click', function(){
          // Set player stats
          playerName = character.name
          /* Hide all cards */
          document.getElementById('placeholderCard').classList.add('hide')
          charactersArr.forEach(function(character){
            document.getElementById(`${character.name}Card`).classList.add('hide')
          })
          /* Show card */
          document.getElementById(`${character.name}Card`).classList.remove('hide')
          /* Activate play btn */
          playBtn.disabled = false
        }) 
      })
      
        
      characterCard.innerHTML += charactersArr.map(function(character){
          return `
            <div class="hide card" id='${character.name}Card'>
              <img src='images/${character.img}' alt="Kevin">
              <h2>${character.name}</h2>
              <div class="ability">
                <h3>${character.ability}</h3>
                <p class="small-text">${character.abilityText}</p>
              </div>
              <div class="stats">
                <p>Str<span class="number">${character.strength}</span></p>
                <hr>
                <p>Spe<span class="number">${character.speed}</span></p>
                <hr>
                <p>Int<span class="number">${character.intelligence}</span></p>
                <hr>
                <p>Wis<span class="number">${character.wisdom}</span></p>
              </div>
            </div>
          `
      }).join('')
}

/* // Event listeners
playBtn.addEventListener('click', function(){
  displayGameScreen()
  renderGameScreen(introEvents[currentEventIndex])
}) */


// Functions
function displayGameScreen(){
  selectionScreen.style.display = 'none'
  gameScreen.style.display = 'grid'
} 

function displaySelectionScreen(){
  selectionScreen.style.display = 'flex'
  gameScreen.style.display = 'none'
} 

function renderGameScreen(event){
  index = 0
  renderGamescreenElements(event, index)
  
  // add button event listener 
  nextBtn.addEventListener('click', function(){
    index ++
    // if more events (simplify this)
    if (event.text[index]){
      npcTextEl.innerText = event.text[index]
      
    // render buttons
    renderButtons(event, index)
    
    } else {
      currentEventIndex ++
      renderGameScreen(introEvents[currentEventIndex])
    } 
  })
}

function renderGamescreenElements (event, index){
  npcImg.src = event.character.img
  npcNameEl.innerText = event.character.name
  npcTextEl.innerText = event.text[index]
  playerNameEl.innerText = playerName
} 

function renderButtons(event, index){
  // Render buttons
  if (event.options[index] === 'Next') {
    nextBtn.style.display = 'inline'
    choice1Btn.style.display = 'none'
    choice2Btn.style.display = 'none'
  }
  else {
    nextBtn.style.display = 'none'
  
    if (event.options[index].length === 1) {
      choice1Btn.style.display = 'inline'
      choice1Btn.innerText = event.options[index][0]
    }
  }
}

// 1. Render Intro
const midScreen = document.getElementById('mid-screen')

midScreen.innerHTML = `
    <img class="logo-img" src="images/logo.png">
`