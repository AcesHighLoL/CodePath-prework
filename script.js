// Global Constants

const cluePauseTime = 333;
const nextClueWaitTime = 700;

// Global Variables
var clueHoldTime = 1000;
var pattern = [];
var length = 8;
// var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var countdown = 25;
var endTime = false;
let timer = null;


function countDown(){
  const countdownHTML = document.getElementById("timer");
  countdownHTML.innerHTML = "Timer: " + countdown;
  countdown--;
  
  if(countdown < 0 || endTime){
    if(!endTime){
      stopGame();
      alert("Too slow! Time is up.");
    }
    countdown = 25;
    clearInterval(countdown);
    
  }
} 


function randomPattern(){
  for( let i = 0; i < length; i++){
    var rng = Math.floor(Math.random() * 5) + 1;
    pattern[i] = rng;
  }
}

function startGame(){
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomPattern();
  console.log(pattern);
  clueHoldTime = 1000;
  playClueSequence();
}

function stopGame(){
  clueHoldTime = 1000;
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  endTime = true;
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  countdown = 25;
  clueHoldTime -= 80;
  endTime = false;
  clearInterval(timer);
  timer = setInterval(countDown,1000); // will subtract 1 to timer every second 
  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}


function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //console.log("correct")
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
        endTime = true;
      }
      else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
    endTime = true;
  }
}    



// Sound Synthesis Functions
const freqMap = {
  1: 259,
  2: 325,
  3: 395,
  4: 465,
  5: 520
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


// Credit to Samuell Howell on https://codepen.io/samuelhowell for the code below
// Thought it would add some uniqueness to the page

const items = ['memorization', 'skills', 'mind'];
const delSpeed = 70;
const typeSpeed = 120;
const targetElm = '.type';

let index = 0; // index of array
let charIndex = 0; // index of character in string

function typing() {
  if (index === items.length) {
    index = 0;
    setTimeout(typing, typeSpeed);
  } else if (charIndex >= items[index].length + 1) {
    setTimeout(deleteTxt, delSpeed);
  } else if (charIndex < items[index].length + 1) {
    const addChar = items[index].substr(-items[index].length, charIndex);
    document.querySelector(targetElm).innerHTML = addChar;
    charIndex += 1;
    setTimeout(typing, typeSpeed); 
  }
};

function deleteTxt() {
  if (charIndex >= 0) {
    const delChar = items[index].substr(-items[index].length, charIndex);
    document.querySelector(targetElm).innerHTML = delChar;
    charIndex -= 1;
    setTimeout(deleteTxt, delSpeed); 
  } else if (index <= items.length -1) {
    index += 1;
    typing();
  } else {
    typing();
  }
}; 

typing();