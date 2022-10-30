// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Little interest or pleasure in doing things",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    },{
        question : "Feeling down, depressed, or hopeless",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    },{
        question : "Trouble falling or staying asleep, or sleeping too much",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
        
    },{
        question : "Feeling tired or having little energy",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"


    },{
        question : "Poor appetite or overeating",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    },{
        question : "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    },{
        question : "Trouble concentrating on things, such as reading the newspaper or watching television",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    },{
        question : "If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    },{
        question : "Moving or speaking so slowly that other people could have noticed",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    },{
        question : "Thoughts that you would be better off dead, or of hurting yourself",
        imgSrc : "quizlogo.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC :"Not Sure",
        correct : "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "5.png" :
              (scorePerCent >= 60) ? "4.png" :
              (scorePerCent >= 40) ? "3.png" :
              (scorePerCent >= 20) ? "2.png" :
              "1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

