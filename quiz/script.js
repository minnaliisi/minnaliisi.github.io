//results
var resultOptions = [
  { title: 'You are a square',
    shape: 'Shape img here'},
  { title: 'You are a triangle',
    shape: 'Shape img here'},
  { title: 'You are a hexagon',
    shape: 'Shape img here'},
  { title: 'You are a circle',
    shape: 'Shape img here'}
];

//global variable
var quizSteps = $('#quiz .quiz-step'),
    totalScore = 0;

//calculating values from data-index to achieve result
quizSteps.each(function() {
  var currentStep = $(this),
      ansOpts = currentStep.children('.quiz-option');
ansOpts.each(function () {
  var eachOpt = $(this);
      value =
});

});

//show current step/hide other steps
function updateStep(currentStep) {
  if(currentStep.hasClass('current')){
    currentStep.removeClass('current');
    currentStep.next()addClass('current');
  }
}

//calculatin final value
function calcResults(totalScore) {
  if(quizSteps.find('.active').length == quizSteps.length){
    var resultsTitle = $('#results h1'),
        resultsShape = $('#results .shape');


  }

  //results
  resultsTitle.replaceWith("<h1>" + resultOptions[n].title + "</h1>");
  resultsShape.replaceWith("<p class='shape'>" + resultOptions[n].shape + "</p>");
  return;
} else {
    n++;
}
