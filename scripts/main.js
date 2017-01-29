

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
var choices = ['g', 'r', 'y', 'b'];
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
		console.log('Powered on')
		$switchPower.onclick = function(){counterOff()}; }
		else if ($switchPower.checked === false){ gamePower = false;
			counterOff();
			console.log('turned off')
		}
}


function counterOn () {
	$counter.innerHTML = '--';
	playSelect = [];
    compSelect = [];
    roundCount = 0;
}

function counterOff(){
	location.reload();
	$counter.innerHTML = '';
	playSelect = [];
    compSelect = [];
    roundCount = 0;
}

function highlight(elem, bkColor){
	var el = elem;
	var original = elem.style.backgroundColor;
	setTimeout(function(){
		el.style.backgroundColor = original;
	}, 500);
}


var strictValue =  0; 
$strictMode.onclick = function(){
	if(gamePower === true){
		$counter.innerHTML = '--';
		playSelect = [];
    	compSelect = [];
    	roundCount = 0;
	if($strictMode.value == 0){
		$strictLight.style.backgroundColor = 'red';
		$strictMode.value += 1;
		return strictValue = $strictMode.value;
	} else if ($strictMode.value == 1){
		$strictLight.style.backgroundColor = 'white';
		$strictMode.value -= 1;
		return strictValue = $strictMode.value;
	}
 }
}

$green.onclick = function () {
	if(gamePower === true && compOn === false){
	greenActive(200);
	yourTurn('g');
  }
}


$red.onclick = function (){
	if(gamePower === true && compOn === false){
	redActive(200);
	yourTurn('r');
}
}

$yellow.onclick = function (){
	if(gamePower === true && compOn === false){
	yellowActive(200);
	yourTurn('y');
}
}

$blue.onclick = function (){
	if(gamePower === true && compOn === false){
	blueActive(200);
	yourTurn('b');
}
}



// Starting the Game

function randIndex(min, max){
	return Math.round(Math.random() * (max-min) + min);
}

function checkState(){
	if(compSelect.length === 0) {
		$counter.innerHTML = roundCount += 1;
	    next();
	    playState();
	}
	if(compSelect.length !== playSelect.length && compSelect.length >1){
		if(compSelect[playSelect.length-1] !== playSelect[playSelect.length-1]){
				$counter.innerHTML = ':(';
				playSelect = [];
				setTimeout(function(){
					$counter.innerHTML = compSelect.length;
  					playState();
  				}, 2000)
  				
			}
		}

      if (compSelect.length === playSelect.length && compSelect.length > 0) {
      	// console.log(compSelect.length)
      		if(compSelect[compSelect.length-1] === playSelect[compSelect.length-1] && playSelect.length<20){
      			console.log('yes')
      			playSelect = [];
                next();
                $counter.innerHTML = compSelect.length;
                setTimeout(function(){
                	playState();
                }, 500)
  			} else if (compSelect[compSelect.length-1] !== playSelect[compSelect.length-1]){
  				$counter.innerHTML = ':(';
				playSelect = [];
				setTimeout(function(){
					$counter.innerHTML = compSelect.length;
  					playState();
  				}, 2000)
  			} else if (compSelect[compSelect.length-1] === playSelect[compSelect.length-1] && playSelect.length === 20){
  				$counter.innerHTML = 'WIN';
  				setTimeout(function(){
  					location.reload();
  				}, 4000)
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
	compSelect.push(choices[idx]);
}

function playState(){
	compOn = true;
	var idx = 0;
	var intervalFunc = setInterval(function(){
		if(compSelect[idx] == 'g'){ greenActive(1000);
	 } else if (compSelect[idx] == 'r'){ redActive(1000);
	 } else if (compSelect[idx] == 'y'){ yellowActive(1000);
	 } else if (compSelect[idx] == 'b'){ blueActive(1000);
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
	checkState();
  }
}

function greenActive(time){
	var audio = new Audio(sounds[0]);
	audio.play();
	$green.style.backgroundColor = '#03F903'
	setTimeout(function(){
		$green.style.backgroundColor = '#047213';
	}, time);
}

function redActive(time){
	var audio = new Audio(sounds[1]);
	audio.play();
	$red.style.backgroundColor = 'red'
	setTimeout(function(){
		$red.style.backgroundColor = '#A20101';
	}, time);
}

function yellowActive(time){
	var audio = new Audio(sounds[2]);
	audio.play();
	$yellow.style.backgroundColor = 'yellow'
	setTimeout(function(){
		$yellow.style.backgroundColor = '#A5A004';
	}, time);
}

function blueActive(time){
	var audio = new Audio(sounds[3]);
	audio.play();
	$blue.style.backgroundColor = '#0133FA'
	setTimeout(function(){
		$blue.style.backgroundColor = '#071660';
	}, time);
}













































