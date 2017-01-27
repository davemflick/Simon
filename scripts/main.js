var $switchPower = document.getElementById('switchPower');


function isOn(){
	if ($switchPower.checked == true){ gamePower = true;
		console.log('Powered on')}
		else if ($switchPower.checked == false){ gamePower = false;
			console.log('turned off')
		}
}
