(function(){
let reverseStr = (str) => {
	let newStr = "", strl = str.length - 1;
	for(let i = strl; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}


console.log(reverseStr("hello there my good friend"));

}());