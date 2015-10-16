'use strict';

//get request to send the adjective to the server
$("#getAdjectiveButton").click(function() {
  $.get('adjective', function(response) {
    var adjective = response.word;
    $("#adjective").text(adjective);
  });
});

//get request to send the verb to the server
$("#getVerbButton").click(function() {
  $.get('verb', function(response) {
    var verb = response.word;
    $("#verb").text(verb);
  });
});

//get request to send the noun to the server
$("#getNounButton").click(function() {
  $.get('noun', function(response) {
    var noun = response.word;
    $("#noun").text(noun);
  });
});

// on click event on submit button
$("#submitWords").on("submit", function(e) {
  e.preventDefault();

  // storing values of adjective, noun and verb
  var adjective = $("input[name=adjective]").val();
  var noun = $("input[name=noun]").val();
  var verb = $("input[name=verb]").val();

  //if its the adjective then respond with adjective word
  if (adjective) {
    var adjPost = {word: adjective};
    $.post("adjective", adjPost, function(response) {
      var adjectiveRes = response;
      $("#adjectiveRes").text(adjectiveRes);
    });
  }

  //if its the noun then respond with noun word
  if (noun) {
    var nounPost = {word: noun};
    $.post("noun", nounPost, function(response) {
      var nounRes = response;
      $("#nounRes").text(nounRes);
    });
  }

  //if its the verb then respond with verb word
  if (verb) {
    var verbPost = {word: verb};
    $.post("verb", verbPost, function(response) {
      var verbRes = response;
      $("#verbRes").text(verbRes);
    });
  }

});
