/** Hangman **/
var url = "http://hangman-api.herokuapp.com/hangman";

function processStartGame(data){
  $("input.token").val(data.token);
  $(".hangman-word").text(data.hangman);
  $("#new-game").hide();
}

function startGame(){
  $.ajax(url,
  {
    method: "POST"
  }).done(processStartGame);
}

function makeGuess(){
  var guess = $("input.letter").val();
  var token = $(".token").val();
  $.ajax(url,
  {
    method: "PUT",
    data: {token: token, letter: guess}
  }).done(function (data) {
    processGuessResult(data, guess);
  });
}

function processGuessResult(data, guess){
  $(".hangman-word").text(data.hangman);
  $("input.token").val(data.token);
  var spanHtml = "<span class='";
  if (data.correct) {
    spanHtml += "correct";
  } else {
    spanHtml += "wrong";
  }
  spanHtml += "'>" + guess + "</span>";
  $(".attempts").append(spanHtml);
  var wrongAttempts = $('.wrong').length;
  $(".remaining").text(7 - wrongAttempts);
  var token = $(".token").val();
  if (wrongAttempts > 6) {
    $(".console").hide();

    $.ajax(url,
    {
      method: "GET",
      data: {token: token}
    }).done(function(data){
      $(".hangman-word").text(data.solution);
    })
  }
}
