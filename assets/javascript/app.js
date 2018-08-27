$("#startClock").on("click", function (){
      $('#container').show();
    });

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
    choices: ["Blackwing Lair", "Naxxaramas","Molten Core", "Onyxia's Lair"],
    answer: 2,
    choiceName: "choiceThree"
  },
  {
    question: "What is the current level cap in world of wacraft?",
    choices: [100, 110, 115, 120],
    answer: 3,
    choiceName: "choiceFour"
  },
  {
    question: "What is the only world of warcraft class that only has two specializations?",
    choices: ["Monk", "Death Knight", "Demon Hunter", "Priest"],
    answer: 2,
    choiceName: "choiceFive"
  },
  {
    question: "In world of warcraft, what does PvE stand for?",
    choices: ["Player vs Environment", "Pete vs Eric", "Player vs Everybody", "Person vs Environment"],
    answer: 0,
    choiceName: "choiceSix"
  }
];
for(var i = 0; i<trivia.length;i++) {
  $("#question-holder").append(trivia[i].question + "</br>");
  for(var k = 0; k < trivia[i].choices.length;k++) {
    $("#question-holder").append('<input type="radio" name="' + trivia[i].choiceName + '" value="' + trivia[i].choices[k] + '">'+ trivia[i].choices[k] +' </input>');
    }
    $("#question-holder").append("</br></br></br>")
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
      correctAnswers++
    } else {
      incorrectAnswers++;
    }
  }
  $("#correct").text(correctAnswers + " Correct");
  $("#incorrect").text(incorrectAnswers + " WRONG");
  $("#unanswered").text(unAnswered + " Not answered");
}
