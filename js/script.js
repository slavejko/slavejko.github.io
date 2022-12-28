//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    // info_box.classList.add("activeInfo"); //show info box
    quiz_box.classList.add("activeQuiz");
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    show_btn.classList.add("show"); //show the next button if user selected any option
    next_btn.classList.add("show"); //show the next button if user selected any option
}

// // if exitQuiz button clicked
// exit_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
// }

// // if continueQuiz button clicked
// continue_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     showQuetions(0); //calling showQestions function
//     queCounter(1); //passing 1 parameter to queCounter
// }

// let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let vyber = [];

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    // timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    // startTimer(timeValue); //calling startTimer function
    // startTimerLine(widthValue); //calling startTimerLine function
    // timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
    show_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const show_btn = document.querySelector("footer .show_btn");
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
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
    vyber = [];
}

show_btn.onclick = ()=>{
    // show_btn.classList.remove("show"); //hide the next button
    // console.log("clicked")
    // console.log(questions)

    // console.log(vyber);
    // console.log(vyber[0][0]);
    // console.log(vyber[1][0].textContent);


    optionSelected2();
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';

    que_text.innerHTML = question_tag; // adding question into html ,adding new span tag inside question_tag

    option_list.innerHTML = option_tag; //adding list of options into html, adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // console.log(option)

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
        
        // option[i].setAttribute("onclick", '()=>{optionSelected(this);}');
        // option[i].onclick = () => {
        //     optionSelected(this);
        // }
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    // console.log("xxx");
    // odpovede1.push(answer.textContent);
    let x = [];
    x.push(answer);
    vyber.push(x);
    
    // console.log(x);
    // console.log(vyber);
    // optionSelected2(vyber[0][0]);
}

// !!!!!!!!!!!!!!!!!!!!!!  TU POKRACOVAT A PREMENIT TO NECH BERIE ARRAY !!!!!!!!!!!!!!!!!!!!!!!!!!!!
//if user clicked on option
function optionSelected2(){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine

    // console.log(answer);

    //                [ktora odpoved][?]
    let answer = vyber[0][0];
    console.log(vyber.length);

    for(xi = 0; xi < vyber.length; xi++){
        let answer = vyber[xi][0];
        let userAns = answer.textContent; //getting user selected option
        let correcAns = questions[que_count].answer; //getting correct answer from array
        // const allOptions = option_list.children.length; //getting all option items

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

            // for(i=0; i < allOptions; i++){
            //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
            //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            //         console.log("Auto selected correct answer.");
            //     }
            // }
        }

    }

    const allOptions = option_list.children.length; //getting all option items
    let correcAns = questions[que_count].answer; //getting correct answer from array

    console.log(allOptions);

    //for corrans length, on yi place, if matched get ticked

    for(i=0; i < allOptions; i++){
        if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
            option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            console.log("Auto selected correct answer.");
        }
    }

    // let userAns = answer.textContent; //getting user selected option
    // let correcAns = questions[que_count].answer; //getting correct answer from array
    // const allOptions = option_list.children.length; //getting all option items

    // if(userAns == correcAns){ //if user selected option is equal to array's correct answer
    //     userScore += 1; //upgrading score value with 1
    //     answer.classList.add("correct"); //adding green color to correct selected option
    //     answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    //     console.log("Correct Answer");
    //     console.log("Your correct answers = " + userScore);
    // }else{
    //     answer.classList.add("incorrect"); //adding red color to correct selected option
    //     answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    //     console.log("Wrong Answer");

    //     for(i=0; i < allOptions; i++){
    //         if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
    //             option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //             option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //             console.log("Auto selected correct answer.");
    //         }
    //     }
    // }

    // for(i=0; i < allOptions; i++){
    //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    // }
    // show_btn.classList.add("show"); //show the next button if user selected any option
    // next_btn.classList.add("show"); //show the next button if user selected any option
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

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}