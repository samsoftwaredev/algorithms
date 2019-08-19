//returns an array of numbers
let fib = function (n){
	let arr = [];
	if(n >= 1) {
		arr[0] = 1;
	}
	if(n >= 2) {
		arr[1] = 1;
	}
	if(n >=3) {		
		for(let i = 2; i < n; i++){
			debugger;
			arr[i] = arr[i-1] + arr[i-2];
		}
	}
	return arr;
}

console.log(fib(10));