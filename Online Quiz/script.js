const questions=[
    {
        question: "Which is the world's largest animal?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Elephant", correct: false},
            { text: "Camel", correct: false},
            { text: "Whale", correct: true},
        ]
    },
    {
        question: "Which is the world's largest animal?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Elephant", correct: false},
            { text: "Camel", correct: false},
            { text: "Whale", correct: true},
        ]

    },
    {
        question: "Which is the world's largest animal ?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Elephant", correct: false},
            { text: "Camel", correct: false},
            { text: "Whale", correct: true},
        ]
    },
    {
        question: "Which is the world's largest animal ?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Elephant", correct: false},
            { text: "Camel", correct: false},
            { text: "Whale", correct: true},
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-bottons");
const nextButton= document.getElementById("next-btn");

let currectQuestionIndex=0;
let score=0;
function startQuiz(){
    currectQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currectQuestion = questions[currectQuestionIndex];
    let questionNo= currectQuestionIndex +1;
    questionElement.innerHTML =questionNo  +"."+ currectQuestion.question;

    currectQuestion.answers.forEach(answers=>{
        const button= document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click" , selectAnswer())
    });
}
function  resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn= e.target;
    const isCorrect= selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
    }
    else{
        selectBtn.classList.add("incorrect");
    }
}
startQuiz() ;