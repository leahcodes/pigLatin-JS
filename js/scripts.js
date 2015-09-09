var pigLatin = function(word) {
  var vowelsStart = ["a", "e", "i", "o", "u"];
  var vowelsInside = ["a", "e", "i", "o", "u", "y"];
  if (vowelsStart.indexOf((word.charAt(0))) >= 0) {
    var wordAy = word.concat("ay");
    return wordAy;
} else if (vowelsStart.indexOf((word.charAt(0))) < 0 && vowelsInside.indexOf((word.charAt(1))) < 0 && vowelsInside.indexOf((word.charAt(2))) < 0 && vowelsInside.indexOf((word.charAt(3))) < 0) {
      var wordNew2 = (word.slice(4)).concat(word.charAt(0)).concat(word.charAt(1)).concat(word.charAt(2)).concat(word.charAt(3)).concat("ay");
      return wordNew2;
} else if (vowelsStart.indexOf((word.charAt(0))) < 0 && vowelsInside.indexOf((word.charAt(1))) < 0 && vowelsInside.indexOf((word.charAt(2))) < 0) {
      var wordNew2 = (word.slice(3)).concat(word.charAt(0)).concat(word.charAt(1)).concat(word.charAt(2)).concat("ay");
      return wordNew2;
} else if (vowelsStart.indexOf((word.charAt(0))) < 0 && vowelsInside.indexOf((word.charAt(1))) < 0) {
    var wordNew1 = (word.slice(2)).concat(word.charAt(0)).concat(word.charAt(1)).concat("ay");
    return wordNew1;
} else if (vowelsStart.indexOf((word.charAt(0))) < 0) {
    var wordNew = (word.slice(1)).concat(word.charAt(0)).concat("ay");
    return wordNew;
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
