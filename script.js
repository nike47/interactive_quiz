var questions = [
    {
        question : "What is the baby of a moth known as?",
        choices: ["baby", "infant", "kit", "larva"],
        correctanswer: 3
    },
    {
        question : "What is the adult of a kid called?",
        choices: ["baby", "infant", "goat", "larva"],
        correctanswer: 2
    },
    {
        question : "What is the young of a buffalo called?",
        choices: ["calf", "infant", "kit", "larva"],
        correctanswer: 0
    },
    {
        question : "What is a baby alligator called?",
        choices: ["baby", "gator", "hatchling", "larva"],
        correctanswer: 2
    },
    {
        question : "What is ababy goose called?",
        choices: ["baby", "gosling", "kit", "larva"],
        correctanswer: 1
    }
];

var currentquestion = 0;
var correctanswer = 0;
var quizover = false;

$(document).ready(function(){
    displaycurrentquestion();
    $(this).find(".quizmessage").hide();
    $(this).find(".nextbutton").on("click", function() {
        if(!quizover){
            value = $("input[type='radio']:checked").val();
            if(value == undefined){
                $(document).find(".quizmessage").text("please select an answer");
                $(document).find(".quizmessage").show();
            } else{
                $(document).find(".quizmessage").hide();
                if(value == questions[currentquestion].correctanswer){
                    correctanswer++;
                }
                currentquestion++;
                if(currentquestion < questions.length){
                    displaycurrentquestion();
                } else{
                    displayscore();
                    $(document).find(".nextbutton").text("Play again???");
                    quizover=true;
                }
            }
        }else {
            quizover = false;
            $(document).find(".nextbutton").text("Next Question");
            resetquiz();
            displaycurrentquestion();
            hidescore();
        }
    });
});

function displaycurrentquestion(){

    console.log("In display current question");

    var question = questions[currentquestion].question;
    var questionclass = $(document).find("#quizdiv > .question");
    var choicelist = $(document).find("#quizdiv > .choicelist");
    var numchoiches = questions[currentquestion].choices.length;

    $(questionclass).text(question);

    $(choicelist).find("li").remove();

    var choice;
    for(i=0;i<numchoiches; i++){
        choice = questions[currentquestion].choices[i];
        $('<li><input type="radio" value= ' + i + ' name = "dynradio" />' + choice + '</li>').appendTo(choicelist);
    }
}

function resetquiz(){
    currentquestion = 0;
    correctanswer = 0;
    hidescore();
}

function displayscore(){
    $(document).find("#quizdiv > .result").text("you scored : " + correctanswer + " out of " + questions.length);
    $(document).find("#quizdiv > .result").show();
}

function hidescore() { 
    $(document).find(".result").hide();
 }