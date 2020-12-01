readlineSync = require("readline-sync");
var score= 0; 
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("right");
    score = score + 1;
    console.log("---------");
  }
  else{
    console.log("wrong")
     score = score - 1;
    console.log("---------");
  }
}
var questions = [{
  question: `where do shubham live ? 
  a: Amritsar 
  b: Ludhiana
  c: Chandigarh  
  `,

  answer: "a"
},
{
  question: `what is Shubham's age? 
  a: 19 
  b: 18
  c: 17
  `,
  answer: "b"
},
{
  question: `Who is shubham's best friend? 
  a: his father
  b: from his friend circle
  c: college mate
  `,
  answer: "a"
},
{
  question: `Who is the most loved person of shubham's life? 
  a: father
  b: mother
  c: sibling
  `,
  answer: "b"
},
{
  question: `What is Shubham's fav color? 
  a: black
  b: red
  c: blue
  `,
  answer: "a"
},
{
  question: `Who inspire the shubham most? 
  a: Ashutosh bhaiya
  b: Rishab Bhaiya
  c: Tany sir
  `,
  answer: "c"
},
{
  question: `In which field shubham is best to some extent? 
  a: hacking
  b: web development
  c: web designing
  `,
  answer: "c"
},
{
  question: `Who inspire shubham the most for programming ? 
  a: cyber nikunj
  b: ankit sir
  c: technical sapien
  `,
  answer: "c"
},
{
  question: `Do shubham have crush on anyone? 
  a: yes
  b: no
  
  `,
  answer: "b"
},
{
  question: `which of the following represent shubhams personality? 
  a: frustrated
  b: happy
  c: stressed
  d: c and a
  `,
  answer: "d"
},
{
  question: `who is shubhams favourite teacher? 
  a: Shree krishna 
  b: no one 
  c: really no one
  `,
  answer: "a"
},
{
  question: `what is the basic teaching of Shreemad bhagvat geeta? 
  a: be a Dharmi
  b: be a Human
  
  `,
  answer: "b",
},
{
  question: `is shubham is in contact with any religious political party ? 
  a: yes
  b: no
  
  `,
  answer: "a",
},]

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Great! you scored " + score ) ;