$('#startClock').click(function(){
    var counter = 5;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
      span = $("#count").text(counter +" seconds");
    }
    if (counter === 0) {
        alert('Time!');
        clearInterval(counter);
        checkAnswers(trivia);
    }
  }, 1000);  
});

//var questions = ["How many classes are in world of warcraft?","What year was world of warcraft released?"];
//var choices = [[10, 12, 14, 16], [2004,2005,2008,2010]];
var trivia = [
  {
    question: "How many classes are in world of wacraft?",
    choices: [10,12,14,16],
    answer: 1,
    choiceName: "choiceOne"
  },
  {
    question: "What year was world of warcraft released?",
    choices: [2004,2005,2008,2010],
    answer: 0,
    choiceName: "choiceTwo"
  },
  {
    question: "What was the first raid available in vanilla WoW",
    choices: ["Blackwing Lair", "Naxxaramus","Molten Core", "Onxyias Lair"],
    answer: 2,
    choiceName: "choiceThree"
  }
];
for(var i = 0; i<trivia.length;i++) {
  $("#question-holder").append(trivia[i].question + "</br>");
  for(var k = 0; k < trivia[i].choices.length;k++) {
    $("#question-holder").append('<input type="radio" name="' + trivia[i].choiceName + '" value="' + trivia[i].choices[k] + '">'+ trivia[i].choices[k] +' </input>');
    }
    $("#question-holder").append("</br>")
}

function checkAnswers(questions) {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
  for(var i = 0; i<questions.length;i++) {
    var answerButtons = $('[name='+questions[i].choiceName+']');
    var checkedButtons = answerButtons.is(':checked');
    if(checkedButtons === false) {
      unAnswered++;
      continue;
    }
    var correctRadioButton = answerButtons.eq(questions[i].answer);
    var correctRadioButtonIsChecked = correctRadioButton.is(':checked');
    if (correctRadioButtonIsChecked) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
  }
  $("#correct").text(correctAnswers);
  $("#incorrect").text(incorrectAnswers);
  $("#unanswered").text(unAnswered);
}











// for(var i = 0;i<questions.length;i++) {
//   $("#question-holder").append(questions[i] + "</br>");
//   for(var k = 0;i<choices.length;k++) {

//   }
// }
    


