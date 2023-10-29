let questions = [
    {
        "numb": 1,
        "question": "The word Diwali is derived from which language?",
        "answer": "c) Sanskrit ",
        "options": [
            "a) Pali",
            "b) Apabhramsa",
            "c) Sanskrit ",
            "d) Prakrit"
        ]
    },
    {
        "numb": 2,
        "question": "The name Diwali is derived from the Sanskrit term Deepavali. What is Deepavali English translation?",
        "answer": "c) Row of lights",
        "options": [
            "a) Row of colours",
            "b) Colourful lights",
            "c) Row of lights",
            "d) Victory of the light"
        ]
    },
    {
        "numb": 3,
        "question": "Thalai Deepavali is a unique Diwali custom of which Indian State?",
        "answer": "a) Tamil Nadu ",
        "options": [
            "a) Tamil Nadu ",
            "b) Kerela",
            "c) Andhra Pradesh",
            "d) Telangana"
        ]
    },
    {
        "numb": 4,
        "question": "How many days do people celebrate Diwali?",
        "answer": "d) 5",
        "options": [
            "a) 1",
            "b) 7",
            "c) 3",
            "d) 5"
        ]
    },
    {
        "numb": 5,
        "question": "Second day of Diwali is known as?",
        "answer": "d) Naraka Chaturdashi",
        "options": [
            "a) Bhai Dooj",
            "b) Dhanteras",
            "c) Govardhan Pooja",
            "d) Naraka Chaturdashi"
        ]
    },
    {
        "numb": 6,
        "question": "Which day of Diwali celebrates the bond between brothers and sisters?",
        "answer": "d) Fifth ",
        "options": [
            "a) First",
            "b) Second",
            "c) Fourth",
            "d) Fifth "
        ]
    },
    {
        "numb": 7,
        "question": "For what reason Diwali is celebrated among Sikhs?",
        "answer": "b) Release of Guru Hargobind",
        "options": [
            "a) For Ram’s victory over Ravana",
            "b) Release of Guru Hargobind",
            "c) Defeat of Narakasura by Shri Krishna",
            "d) None of the above"
        ]
    },
    {
        "numb": 8,
        "question": "Diwali is observed in which month according to the Hindu calendar?",
        "answer": "d) Kartika",
        "options": [
            "a) Ashwin",
            "b) Bhadra",
            "c) Asvina",
            "d) Kartika"
        ]
    },
    {
        "numb": 9,
        "question": "Which day of Diwali commemorating Krishna’s defeat of Indra is called Goverdhan Puja, Balipratipada, or Annakut?",
        "answer": "d) Fourth",
        "options": [
            "a) Fifth",
            "b) Third",
            "c) Second",
            "d) Fourth"
        ]
    },
    {
        "numb": 10,
        "question": "South Indians celebrate Diwali in honour of lord Krishna’s win over which Demon King?",
        "answer": "b) Narakasura ",
        "options": [
            "a) Bhandasura",
            "b) Narakasura ",
            "c) Rakshasa",
            "d) Yakshas"
        ]
    },
    {
        "numb": 11,
        "question": "Diwali always occurs on:",
        "answer": "b) New Moon",
        "options": [
            "a) Full moon night",
            "b) New Moon",
            "c) First quarter of the moon",
            "d) Crescent moon"
        ]
    },
    {
        "numb": 12,
        "question": "Which popular Indian Monument’s foundation stone was laid on the day of Diwali?",
        "answer": "c) Golden Temple",
        "options": [
            "a) Red Fort",
            "b) Amber Fort",
            "c) Golden Temple",
            "d) Taj Mahal"
        ]
    },
    {
        "numb": 13,
        "question": "Which is the first day of Diwali, dedicated to cleaning homes and purchasing small items of gold?",
        "answer": "b) Dhanteras",
        "options": [
            "a) Naraka Chaturdashi",
            "b) Dhanteras",
            "c) Bhai Dooj",
            "d) Goverdhan Puja"
        ]
    },
    {
        "numb": 14,
        "question": "In which among the following Indian States Diwali is celebrated as Kali Puja?",
        "answer": "c) West Bengal",
        "options": [
            "a) Uttar Pradesh",
            "b) Nagaland",
            "c) West Bengal",
            "d) Bihar"
        ]
    },
    {
        "numb": 15,
        "question": "Diwali commemorates the spiritual enlightenment of which two famous saints?",
        "answer": "c) Vardhman Mahavir and Swami Dayananda Saraswati",
        "options": [
            "a) Buddha and Jesus",
            "b) Guru Nanak and Prophet",
            "c) Vardhman Mahavir and Swami Dayananda Saraswati",
            "d) Shri Chaitanya Mahaprabhu and Shri Ramakrishna Paramahansa"
        ]
    },
    {
        "numb": 16,
        "question": "Who was the first US President to host a Diwali party at the White House?",
        "answer": "d) Barack Obama",
        "options": [
            "a) Bill Clinton",
            "b) Donald Trump",
            "c) Joe Biden",
            "d) Barack Obama"
        ]
    },
    {
        "numb": 17,
        "question": "According to Hindu beliefs, during Diwali how many diyas should be lit on Diwali?",
        "answer": "c) 13",
        "options": [
            "a) 14",
            "b) 11",
            "c) 13",
            "d) 21"
        ]
    },
    {
        "numb": 18,
        "question": "According to Ramayana texts, which of the following is true?",
        "answer": "b) The return of Prince Rama of Ayodhya",
        "options": [
            "a) The release of the sixth Guru, Hargobind",
            "b) The return of Prince Rama of Ayodhya",
            "c) Lord Mahavira attained enlightenment",
            "d) All of the above"
        ]
    }




];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}