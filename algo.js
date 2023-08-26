function countWords(str)
{
 
  
  if (str.length == 0) {
    return 0;
  }

  words = [];
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      words.push(temp);
      temp = "";
    }
    else {
      temp += str[i];
    }
  }
 
  var count = 1;
 
  for (var i = 0; i < words.length; i++) {
    if (words[i].length != 0)
      count++;
  }
 
 
  return count;
}
 

  var str = "One two       three\n four\tfive ";
  
  console.log("No of words : " +countWords(str));
