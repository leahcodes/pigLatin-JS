var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf((word.charAt(0))) >= 0) {
    var wordAy = word.concat("ay");
    return wordAy;
} else if (vowels.indexOf((word.charAt(0))) < 0 && vowels.indexOf((word.charAt(1))) < 0) {
    return word.slice(2);
} else if (vowels.indexOf((word.charAt(0))) < 0) {
    return word.slice(1);
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
