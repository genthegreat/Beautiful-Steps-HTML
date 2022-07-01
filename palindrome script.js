function palindrome(str) {
    str = str.replace(/[\W_]+/g,"").toLowerCase();
    let strLength = str.length;
  
    for(let i = 0; i < strLength / 2 ; i++){
      if (str[i] != str[strLength - i - 1]){
        return false;
      }
    }
  
    return true;
  }
  
  palindrome("eye");
