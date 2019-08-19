(function(){
	// Given a time, calculate the angle between the hour and minute hands
	//this algorithm was developed by me
let angleOfClock = (hrs, min) => {
	let h, m, result, angle;
	
	h = (hrs % 12) / 12;
	m = (min / 60);
	result = Math.abs(h - m);
	if(h > m) {
		angle = (1 - result) * 360;
	} else {
		angle = result * 360;
	}
	return angle.toFixed(2);
}
console.log('12:01', angleOfClock(12, 01));
console.log('12:00', angleOfClock(12, 00));
console.log('12:15', angleOfClock(12, 15));
console.log('12:30', angleOfClock(12, 30));
console.log('12:45', angleOfClock(12, 45));
console.log('12:59', angleOfClock(12, 59));
console.log('11:55', angleOfClock(11, 55));
console.log('1:59', angleOfClock(1, 59));

console.log('9:46', angleOfClock(9, 46));
console.log('9:45', angleOfClock(9, 45));
console.log('9:44', angleOfClock(9, 44));

console.log(angleOfClock(1, 30));
console.log("3:30",angleOfClock(3, 30));
console.log(angleOfClock(3, 15));

console.log(angleOfClock(9, 15));
console.log(angleOfClock(3, 05));

}());