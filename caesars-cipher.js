function rot13(str) {
  str = str.split(" ");
  //console.log(str);
  for(let s in str){
    let word = str[s].split("")
    for(let w in word){
      console.log(word[w]);
      //console.log(w);
      let x = word[w].charCodeAt(0);
      let test = x + 13;
      if (x < 65 || x > 90) {
        // Return un-converted character
      } else if (test > 90){
        word[w] = test;
        let i = word[w] - 90;
        word[w] = 64 + i;
        console.log(word[w]);
        word[w] = String.fromCharCode(word[w]);
        console.log(word[w]);
      } else{
        word[w] = test;
        word[w] = String.fromCharCode(word[w]);
      }
      str[s] = word.join("");
    }
    console.log(str)
  }
  return str.join(" ");
}
console.log(rot13("?SERR PBQR PNZC"));