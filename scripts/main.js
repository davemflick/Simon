

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
var playerSelections = [];
var computerSelections = [];
var choices = [$green, $red, $yellow, $blue];



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
}

function counterOff(){
	$counter.innerHTML = '';
    $start.onclick = function(){
	  return false;
    };
    $strictMode.onclick = function(){
    	return false;
    };
}

function highlight(elem, bkColor){
	var el = elem;
	var original = elem.style.backgroundColor;
	el.style.backgroundColor = bkColor;
	setTimeout(function(){
		el.style.backgroundColor = original;
	}, 500);
}

function pickGreen (){
$green.onclick = function () {
	if(gamePower === true){
	highlight($green, '#03F903');
	playerSelections.push($green);}
}
}

$red.onclick = function (){
	if(gamePower === true){
	highlight($red, 'red');
	playerSelections.push($red);}
}

$yellow.onclick = function (){
	if(gamePower === true){
	highlight($yellow, 'yellow');
	playerSelections.push($yellow);}
}

$blue.onclick = function (){
	if(gamePower === true){
	highlight($blue, '#0133FA');
	playerSelections.push($blue);}
}














