function Entry (title, body) {
  this.title = title;
  this.body = body;
}

var entryArray = [];



Entry.prototype.wordCount = function (string) {
  var wordCountArray = string.split(" ");
  var entryArray = wordCountArray.length;
  return entryArray;
}


Entry.prototype.vowelsConsonants = function (string) {

  var bodyLowerCase = string.toLowerCase().split(' ').join('');
  var vowelCounter = 0;
  var consonantCounter = 0;
  var vowelConsonant = [];
  for (i=0; i < bodyLowerCase.length; i++) {
    if (bodyLowerCase[i] === "a" || bodyLowerCase[i] === "e" || bodyLowerCase[i] === "i" || bodyLowerCase[i] === "o" || bodyLowerCase[i] === "u" ){
      vowelCounter += 1;
    }
    else {
      consonantCounter += 1;
    }
  }
  vowelConsonant.push(vowelCounter);
  vowelConsonant.push(consonantCounter);
 return vowelConsonant;
}

Entry.prototype.getTeaser = function (string) {
  var firstSentence = string.substr(0,string.indexOf('.'))
  if (firstSentence.length < 8){
    var stringArray = firstSentence.split(" ");
    var teaser = [];
    for (i = 0; i < 8; i++) {
      teaser.push(stringArray[i]);
    }
    return teaser.join(" ");
  } else {
    return firstSentence;
  }
}

exports.journalModule = Entry;
