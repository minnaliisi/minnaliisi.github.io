/** Hangman **/
var url = "http://hangman-api.herokuapp.com/hangman";

function processStartGame(data){
  $("input.token").val(data.token); //this is the game instance data 'token'
  $(".hangman-word").text(data.hangman);
  $("#new-game").hide();
}

function startGame(){
  $.ajax(url,
  {
    method: "POST" //sends a request for a new game
  }).done(processStartGame);
}

function makeGuess(){
  var guess = $("input.letter").val(); //the value is what you have guessed
  var token = $(".token").val();
  $.ajax(url,
  {
    method: "PUT", //sending guess to API
    data: {token: token, letter: guess}
  }).done(function (data) {
    processGuessResult(data, guess);
  });
}

function processGuessResult(data, guess){
  $(".hangman-word").text(data.hangman);
  $("input.token").val(data.token);
  var spanHtml = "<span class='"; //changes the CLASS of the html element
  if (data.correct) {
    spanHtml += "correct";
  } else {
    spanHtml += "wrong";
  }

  spanHtml += "'>" + guess + "</span>"; //adds the guess to the page - class determines colour
  $(".attempts").append(spanHtml);
  var wrongAttempts = $('.wrong').length; //reduces the amount of guesses
  $(".remaining").text(7 - wrongAttempts); //.text changes the actual TEXT!
  var token = $(".token").val();
  if (wrongAttempts > 6) {
    $(".console").hide();

    $.ajax(url,
    {
      method: "GET",
      data: {token: token} //retrieves solution when attempts have ran out
    }).done(function(data){
      $(".hangman-word").text(data.solution); //reveals the solution
    })
  }
}
