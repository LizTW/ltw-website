$(document).ready(function() {

  var magic8Ball = {};
  magic8Ball.listOfAnswers = ["yes", "no", "maybe", "not sure", "check back later", "do you really want to know?", "cloudy", "hazy", "of course!", "seriously did you have to ask that?"];

  $('#answer').hide();

  magic8Ball.askQuestion = function(question) {
    $('#answer').fadeIn(4000);
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber + this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];
    $('#answer').text(answer);
    console.log(question);
    console.log(answer);
    $('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png');
  };

  var onClick = function() {
    $('#listOfAnswers').hide();
    var question = prompt('Ask me ANYTHING!');
    magic8Ball.askQuestion(question);
    $('#8Ball').effect( 'shake' );
  };

  $('#questionButton').click(onClick);

$('#answer').hide();

$('#8ball').attr('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png');

   setTimeout(
       function() {
           var question = prompt('Ask me ANYTHING!')
           magic8Ball.askQuestion(question)
       }, 500);

});
