
function stringHasUniqueCharacters(str) {
  let obj = {};
  for(let s in str){
    console.log(str[s]);
    if(obj[str[s]] != true) {
      obj[str[s]] = true;
    } else {
      return false;
    }
  }
  return true;
}
console.log(stringHasUniqueCharacters("samuel"));
console.log(stringHasUniqueCharacters("hello"));
console.log(stringHasUniqueCharacters("I love you"));
