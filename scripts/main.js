

//Turn on Simon Game with switch
//Counter turns on and displays '--'
//create an array that contains values for all four colors
// on Start, a random color is chosen, pushed into array, and color brightens, audio plays. 
// The player will have a few seconds to respond in correct order.
// Player selection will push color vaule into new array, that will have to match games array.
// Counter will go up by one for every added value. Will end after 20 successful completions.
// If 20 successful rounds, counter will Display 'WIN'
// If player fails to match,Counter will display a wrong warning.
// Strict Mode activated will not give a player more than one chance per round.
// Strict mode light will turn red when activated.


var $switchPower = document.getElementById('switchPower');
var $counter = document.getElementById('counter');
var $start = document.getElementById('start');
var $strictMode = document.getElementById('strictMode');
var $strictLight = document.getElementById('strictLight');
var $green = document.getElementById('green');
var $red = document.getElementById('red');
var $yellow = document.getElementById('yellow');
var $blue = document.getElementById('blue');

var gamePower = false;
var playSelect = [];
var compSelect = [];
var choices = [$green, $red, $yellow, $blue];
var greenSound = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
var redSound = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
var yellowSound = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
var blueSound = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
var sounds = [greenSound, redSound, yellowSound, blueSound];
var highColors = ['#03F903', 'red', 'yellow', '#0133FA'];
var compOn = false;




//Turn Game On and Off, designate status.
function powerOn(){
	if ($switchPower.checked === true){ gamePower = true;
		counterOn();
		console.log('Powered on')}
		else if ($switchPower.checked === false){ gamePower = false;
			counterOff();
			console.log('turned off')
		}
}


function counterOn () {
	$counter.innerHTML = '--';
	var playSelect = [];
    var compSelect = [];
    roundCount = 0;
}

function counterOff(){
	$counter.innerHTML = '';
	var playSelect = [];
    var compSelect = [];
    roundCount = 0;
}

function highlight(elem, bkColor){
	var el = elem;
	var original = elem.style.backgroundColor;
	setTimeout(function(){
		el.style.backgroundColor = original;
	}, 500);
}


$green.onclick = function () {
	if(gamePower === true && compOn === false){
	greenActive();
	yourTurn($green);
	console.log(playSelect)
  }
}


$red.onclick = function (){
	if(gamePower === true && compOn === false){
	redActive();
	yourTurn($red);
	console.log(playSelect)
}
}

$yellow.onclick = function (){
	if(gamePower === true && compOn === false){
	yellowActive();
	yourTurn($yellow);
	console.log(playSelect)
}
}

$blue.onclick = function (){
	if(gamePower === true && compOn === false){
	blueActive();
	yourTurn($blue);
	console.log(playSelect)
}
}



// Starting the Game
var isEqual;

function randIndex(min, max){
	return Math.round(Math.random() * (max-min) + min);
}

function checkState(){
      if (compSelect.length === playSelect.length) {
      	for(var i = compSelect.length; i--;) {
      		if(compSelect[i] === playSelect[i]){
      			playSelect = [];
                next();
                $counter.innerHTML = compSelect.length;
      			playState();
  			} else if (compSelect[i] !== playSelect[i]){
  				playSelect = [];
  				playState();
  			}
  		}
 	}
}

var roundCount = 0;

function yourTurn (elem){
	playSelect.push(elem);
	checkState();
}

function next(){
	var idx = randIndex(0,3);
	var randomChoice = choices[idx];
	compSelect.push(randomChoice);
}

function playState(){
	compOn = true;
	var idx = 0;
	var intervalFunc = setInterval(function(){
		if(compSelect[idx] == $green){ greenActive();
	 } else if (compSelect[idx] == $red){ redActive();
	 } else if (compSelect[idx] == $yellow){ yellowActive();
	 } else if (compSelect[idx] == $blue){ blueActive();
	 }
	 idx++;
	 if(idx<compSelect.length){
	 	intervalFunc;
	 }
	}, 1200)
	compOn = false;
 return false;
}




function compHighlight(elem, bkColor, sound){
	var audio = new Audio(sound);
	audio.play();
	var el = elem;
	var original = elem.style.backgroundColor;
	el.style.backgroundColor = bkColor;
	setTimeout(function(){
		el.style.backgroundColor = original;
	}, 1200)
}

function gameStart(){
	var idx = randIndex(0,3);
	var randomChoice = choices[idx];
	$counter.innerHTML = roundCount += 1;
	compSelect.push(randomChoice);
	compHighlight(randomChoice, highColors[idx], sounds[idx]);
}

$start.onclick = function(){
	if(gamePower === true){
	gameStart();
  }
}

function greenActive(){
	var audio = new Audio(sounds[0]);
	audio.play();
	$green.style.backgroundColor = '#03F903'
	setTimeout(function(){
		$green.style.backgroundColor = '#047213';
	}, 1000);
}

function redActive(){
	var audio = new Audio(sounds[1]);
	audio.play();
	$red.style.backgroundColor = 'red'
	setTimeout(function(){
		$red.style.backgroundColor = '#A20101';
	}, 1000);
}

function yellowActive(){
	var audio = new Audio(sounds[2]);
	audio.play();
	$yellow.style.backgroundColor = 'yellow'
	setTimeout(function(){
		$yellow.style.backgroundColor = '#A5A004';
	}, 1000);
}

function blueActive(){
	var audio = new Audio(sounds[3]);
	audio.play();
	$blue.style.backgroundColor = '#0133FA'
	setTimeout(function(){
		$blue.style.backgroundColor = '#071660';
	}, 1000);
}













































