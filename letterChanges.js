(function(){
let letterChanges = (str) => {
	let word = "", vowel = ['a', 'e', 'i', 'o', 'u'];
	
    for(let i = 0; i < str.length; i++) {

        let letter = str[i],letNum = str[i].charCodeAt(0);
        if(letNum >= 97 && letNum <= 121) {
            letter = String.fromCharCode(+letNum + 1);
        }else if(letNum == "122"){
            letter = String.fromCharCode(97);
        } 
        
        for(let j = 0; j < vowel.length; j++) {
            if(letter == vowel[j]){
                letter = letter.toUpperCase();
				
			}
            
        }
		console.log(str[i], String.fromCharCode(+letNum + 1), letNum, letter);
		word+=letter;
    }
  // code goes here  
  return word; 
}


console.log(letterChanges("a confusing /:sentence:/[ this is not!!!!!!!~"));

}());