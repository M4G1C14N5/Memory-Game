// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound (1 second)
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables

//pattern keeps track of pattern of butten presses
// find a way to randomly generate values
var pattern = [2, 5, 4, 3, 2, 1, 6, 4];

// progress shows how far we are in the game
// used as index for array pattern
var progress = 0;

// gamePlaying is boolean to tell when game is active
// true when player clicks start and false when player stops
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;

// startGame() fucntion called when player start game
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

// stopGame() fucntion called when player stops game
function stopGame() {
  //gamePlaying set to false when player stops game
  gamePlaying = false;

  //To swap start and stop button
  // startBtn is hidden and stopBtn is shown
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 522,
  6: 644,
  7: 666
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Sucks for you. You lost.");
}
function winGame() {
  stopGame();
  alert("Oh wow. You won...");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }
  //second attempt after aid
  if (pattern[guessCounter] == btn) {
    //guess correct
    if (guessCounter == progress) {
      //turn is over
      if (progress == pattern.length - 1) {//progress is the last turn
        winGame(); //then you win
      }
      else { //progress is not the last turn
        progress++; //increment progress
        playClueSequence(); //go to the next sequence
      }
    }
    else { //turn is not over
      guessCounter++
    }
  }
  else {
    //guess was incorrect
    loseGame(); //then you lose
  }

  // My first first attempt pre-aid
  /*
  //if guess is not correct
  if (btn !== pattern[guessCounter]){
    loseGame();
  }
  else if (btn == pattern[guessCounter]){
    //if turn not over
    if(progress !== pattern.length -1){
      progress++;
      playClueSequence();
    }
    //if turn over 
    else if (progress == guessCounter){
      //is it the last turn?
      if (progress == pattern.length -1){
        winGame();
      }
    }
  }
*/
}
