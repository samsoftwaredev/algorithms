(function(){
let pascalTriangle = function(n) {
	let arr = [];
	
	if(n >= 1) {
		arr.push([1]);
	}
	
	if (n >= 2) {
		arr.push([1,1]);
	}
	
	if(n > 2){
		let i, m;
		
		for(i = 2; i <= (n-1); i++) {			
			let temp = [];
			temp.push(1);
			for(m = 0; m < i-1; m++) {
				let sol = arr[i-1][m] + arr[i-1][m+1];
				temp.push(sol);
				console.log(sol)
			}
			temp.push(1);
			arr.push(temp);
		}
	}
	return arr;
}


console.log(pascalTriangle(9));

}());