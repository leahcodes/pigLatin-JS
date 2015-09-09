var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf((word.charAt(0))) >= 0) {
    var wordAy = word.concat("ay");
    return wordAy;
} else if (vowels.indexOf((word.charAt(0))) < 0 && vowels.indexOf((word.charAt(1))) < 0) {
    var wordNew = (word.slice(2)).concat(word.charAt(0)).concat(word.charAt(1)).concat("ay");
    return wordNew;
} else if (vowels.indexOf((word.charAt(0))) < 0) {
    var wordNew1 = (word.slice(1)).concat(word.charAt(0)).concat("ay");
    return wordNew1;
  }
};




// else {
//   var wordToArray = word.split("");
//   var letters = [];
//   wordToArray.forEach(function(letter) {
//     do  {
//       letters.push(letter);
//     }
//     while ((vowels.indexOf(letter)) < 0);
//   });
//   return letters.join();
// }
