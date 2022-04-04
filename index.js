// DEMON-SLAYER-QUIZ CLI APP

var readLineSync = require('readline-sync');
var chalk = require('chalk');

//Greeting User
function welcomeUser(){
  var userName = readLineSync.question(chalk.magenta('What is your name? '));
  // console.log()
  console.log("Welcome", chalk.cyanBright(userName.toUpperCase()),"\nLet's see what do you know about ", chalk.bgYellowBright('DEMON-SLAYER-ANIME-SERIES'), "\nSo let\'s begin\n");
}

var score = 0;

// players who have high scores
var highScores = [
  {
    name : 'Nayan',
    score : 5
  },
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
  question : 'What is Tanjiro\'s last name?\nAnswer: ',
  answer : 'Kamado'
},
{
  question : 'What is Tanjiro\'s greatest sense?\nAnswer: ',
  answer : 'Smell'
},
{
  question : 'Which Demon Slayer literally kills demons in his sleep?\nAnswer: ',
  answer : 'Zenitsu'
},
{
  question : 'What is a demon\'s greatest weakness?\nAnswer: ',
  answer : 'Light'
},
{
  question : 'Who is said to be the creator of all demons?\nAnswer: ',
  answer : 'Muzan'
}];


function playQuiz(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bgGreen('You are right!'));
    score++;
  }else{
    console.log(chalk.bgRed('You are wrong!'));
    console.log('Correct Answer: ',chalk.green(answer));
  }
  console.log('Current Score: ', chalk.blue(score));
  console.log(chalk.magenta('-----------------------------------------'));
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
  console.log('-----------------------------------------');
  console.log('\n'+ chalk.bgRed('NOTE:') +' Below are the high scorers of this QUIZ. If you have scored more than them send me a screenshot, I will update it  here');
  console.log('-----------------------------------------');
  highScores.map(highscore => console.log(`${highscore.name} : ${highscore.score}`));
}


welcomeUser();
askQuestion();
userScore();
