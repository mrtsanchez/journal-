var Entry = require("./../js/journal-backend.js").journalModule;

$(document).ready(function () {
  $("#entry").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry (title, body);


    $("#wordCount").text(newEntry.wordCount(body));
    var vowelConsonant = newEntry.vowelsConsonants(body);
    $("#vowels").text(vowelConsonant[0]);
    $("#consonants").text(vowelConsonant[1]);
    $("#teaser").text(newEntry.getTeaser(body)+ "....");
  });
});
