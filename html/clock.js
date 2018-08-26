var clock = document.getElementById('clock');


function hexClock(){
	var time = new Date();
	var hours = time.getHours().toString();
	var minutes = time.getMinutes().toString();
	var seconds  =time.getSeconds().toString();
	var ampm;
	if(hours >= 12){
		ampm = "pm";
	}

	if(hours < 12){
		ampm = "am";
	}

	if(hours == 0){
		hours = 12;
	}

	if( hours.length < 2 && hours != 0){
		hours = '0' + hours;
	}

	if (hours > 12){
		hours = hours % 12;
	}
	if( minutes.length < 2){
		minutes = '0' + minutes;
	}
	if( seconds.length < 2){
		seconds = '0' + seconds;
	}

	var clockStr = hours + ':' + minutes + ':' + seconds + ampm;
//	var hexColorStr = '#' + hours + minutes + seconds;

	clock.textContent = clockStr;
//	hexColor.textContent = hexColorStr;

	document.body.style.backgroundColor = '#75027f';

}

hexClock();
setInterval(hexClock,1000);

var sound = new Audio();
sound.src = "Crank That (Soulja Boy).mp3";
		sound.loop = true;

var h2 = document.getElementById('clock');



function addZero(time) {

		return (time < 10) ? "0" + time : time;
	
}

function hoursMenu(){

	var select = document.getElementById('alarmhrs');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();

function minMenu(){

	var select = document.getElementById('alarmmins');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

function secMenu(){

	var select = document.getElementById('alarmsecs');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();


function alarmSet() {

	var hr = document.getElementById('alarmhrs');
	
	var min = document.getElementById('alarmmins');
	
	var sec = document.getElementById('alarmsecs');
	
	var ap = document.getElementById('ampm');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;



//when alarmtime is equal to currenttime then play a sound
	var h2 = document.getElementById('clock');

/*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){
	//var alarm = document.getElementById('alarm');

	var date = new Date();
	
	var hours = date.getHours().toString();
	var minutes = date.getMinutes().toString();
	var seconds  =date.getSeconds().toString();
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

	if( hours.length < 2){
		hours = '0' + hours;
	}

	if( minutes.length < 2){
		minutes = '0' + minutes;
	}
	if( seconds.length < 2){
		seconds = '0' + seconds;
	}



	var currentTime = hours + ':' + minutes + ':' + seconds  + ampm;

console.log('currentTime:' + currentTime);	

	if (alarmTime == currentTime) {
		sound.play();
		}

},1000);



}


function alarmClear() {

	document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
	document.getElementById('alarmsecs').disabled = false;
	document.getElementById('ampm').disabled = false;
	sound.pause();
}


