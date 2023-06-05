'use strict';

let question = [
  [
    "問題１。インガスンガスン",
    "1.若井みどり",
    "2.浅香あき恵",
    "3.末成映薫",
    "4.島田珠代",
    "3"
  ],
  [
    "問題２。～じゃ、あ～りませんか？",
    "1.島木譲二",
    "2.島田一の介",
    "3.チャーリー浜",
    "4.池乃めだか",
    "3"
  ],
  [
    "問題３。ドリルすんのかい、せんのかい",
    "1.松浦真也",
    "2.太田芳伸",
    "3.すっちー",
    "4.吉田裕",
    "4"
  ],
  [
    "問題４。ねーうしとらうー、パンパン、辰巳です",
    "1.辰巳智之",
    "2.辰巳智行",
    "3.辰巳知之",
    "4.辰巳知行",
    "1"
  ]
];

let quiz = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');

let correct = 0;
let quizCnt = 0;

function quizSet() {
  quiz.textContent = question[quizCnt][0];
  ans1.textContent = question[quizCnt][1];
  ans2.textContent = question[quizCnt][2];
  ans3.textContent = question[quizCnt][3];
  ans4.textContent = question[quizCnt][4];
}

quizSet();

function answerCheck(ans) {
  if(ans == question[quizCnt][5]) {
    alert("正解！");
    correct++;
  } else {
    alert("不正解");
  }
  quizCnt++;
  if(quizCnt == question.length) {
    quiz.textContent = `全${question.length}問中、正解数は${correct}です。`;
    ans1.textContent = "";
    ans2.textContent = "";
    ans3.textContent = "";
    ans4.textContent = "";
  } else {
    quizSet();
  }
}
