// DEMON-SLAYER-QUIZ CLI APP

var readLineSync = require('readline-sync');

//Greeting User
function welcomeUser(){
  var userName = readLineSync.question('What is your name? ');
  console.log(`Welcome ${userName}. Let's see what do you know about DEMON-SLAYER-ANIME-SERIES. So let\'s begin\n`);
}

var score = 0;

// players who have high scores
var highScores = [
  {
    name : 'Bharat',
    score : 5
  },
  {
    name : 'Sobit',
    score : 4
  }
]

//Quiz-Questions
var questions = [{
  question : 'What is Tanjiro\'s last name? ',
  answer : 'Kamado'
},
{
  question : 'What is Tanjiro\'s greatest sense? ',
  answer : 'Smell'
},
{
  question : 'Which Demon Slayer literally kills demons in his sleep? ',
  answer : 'Zenitsu'
},
{
  question : 'What is a demon\'s greatest weakness? ',
  answer : 'Light'
},
{
  question : 'Who is said to be the creator of all demons? ',
  answer : 'Muzan'
}];


function playQuiz(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('You are right!');
    score++;
  }else{
    console.log('You are wrong!\nCorrect Answer: ',answer);
  }
  console.log('Current Score: ', score);
  console.log('---------------------------------');
}

//Function to loop through all the questions and answers
function askQuestion(){
  for(var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    playQuiz(currentQuestion.question, currentQuestion.answer);
  }
}


// Output based on user score
function userScore(){
  if(score < 1){
    console.log('Your final score is ' + score + '. Don\'t worry let\'s play again');
  }else{
    console.log('Hurrah!! You have scored : ',score);
  }
  console.log('---------------------------------');
  console.log('\nBelow are the high scorers of this QUIZ. If you have scored more than them send me a screenshot, I will update it  here');
  console.log('---------------------------------');
  highScores.map(highscore => console.log(`${highscore.name} : ${highscore.score}`));
}


welcomeUser();
askQuestion();
userScore();