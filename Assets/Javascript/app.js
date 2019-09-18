
$(document).ready(function(){

var questions = ['What do fire fighters use to make water wetter?','Do cows have upper teeth?','How do bannas grow?']


var questionsAndAnswers=[
    {question:'What do fire fighters use to make water wetter?', 
    answer:'Wetting Agents', options: ['', '', '', 'Wetting Agents']},
    {question: 'Do cows have upper teeth?', 
    answer:'No'},
    {question: 'How do bannas grow?', 
    answer: "Upside down"}
]



        $('#start-button').on("click", function () {
            var randomIndex = Math.floor(questions.length * Math.random());
            $('#question-holder').text(questionsAndAnswers[randomIndex].question);

            for(var i = 0; i < questionsAndAnswers.length; i++) {
                //load each question to page
                console.log(questionsAndAnswers[i])
                //append
            }
           
        })



});
