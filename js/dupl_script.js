//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

function getMyRange(textRange){
    var ranges = [];

    if(textRange.includes("-")){
        let novy_range = textRange.split('-');
        
        if(novy_range.length > 2){
            return [0,0];
        }

        // console.log(novy_range);
        // console.log(novy_range[0]);
        // console.log(parseInt(novy_range[0]));
        // console.log(typeof(novy_range[0]));
        // console.log(typeof(parseInt(novy_range[0])));

        ranges.push(parseInt(novy_range[0]));
        ranges.push(parseInt(novy_range[1]));
        // ranges.push()
    }
    // ranges.push(0);
    // ranges.push(1);

    return ranges;
}

function setVyber(){
    vyber = [];
}


function retUnq(answer){

    var novy_vyber = [];

    for( var i = 0; i < vyber.length; i++ ){ 

        if ( vyber[i][0] != answer) { 
            novy_vyber.push(vyber[i]);
        }
        // setVyber();

    }

    console.log(vyber);
    console.log(novy_vyber);
    console.log(answer);

    return novy_vyber;
}
  
var otazky_poradie = [];
var my_lower_range = -1;
var my_upper_range = -1;
var my_range_q = -1;

// for (let index = my_lower_range; index < my_upper_range; index++) {
//     otazky_poradie.push(index);
// }

// shuffle(otazky_poradie);


// if startQuiz button clicked
start_btn.onclick = ()=>{
    // console.log(document.getElementById("mrange").value);
    let number_ranges = getMyRange(document.getElementById("mrange").value);

    if(number_ranges.length > 0 && number_ranges.length < 3){
        if(number_ranges[1] < number_ranges[0]){
            console.log("zle rozmedzie");
            my_lower_range = 0;
            my_upper_range = questions.length;
            alert("Zle rozmedzie -> " + number_ranges[0] + " - " + number_ranges[1] + " ... Budu ukazane vsetky otazky");
        }else if(number_ranges[0] >= 0){
            my_lower_range = number_ranges[0];
            my_upper_range = number_ranges[1];
        }
    }else{
        my_lower_range = 0;
        my_upper_range = questions.length;
    }

    for (let index = my_lower_range; index < my_upper_range; index++) {
        otazky_poradie.push(index);
    }
    
    shuffle(otazky_poradie);

    my_range_q = my_upper_range - my_lower_range;

    // info_box.classList.add("activeInfo"); //show info box
    quiz_box.classList.add("activeQuiz");
    showQuetions(otazky_poradie[que_count]); //calling showQestions function
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
    showQuetions(otazky_poradie[que_count]); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    // startTimer(timeValue); //calling startTimer function
    // startTimerLine(widthValue); //calling startTimerLine function
    // timeText.textContent = "Time Left"; //change the text of timeText to Time Left
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

    if(que_count < my_range_q - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(otazky_poradie[que_count]); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
    }
    // else if(que_count == 2){
    //     clearInterval(counter); //clear counter
    //     clearInterval(counterLine); //clear counterLine
    //     showResult();
    // }
    else{
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

    var mojShuf = shuffle([0, 1, 2, 3]);

    //creating a new span and div tag for question and option and passing the value using array index
    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[mojShuf[0]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[mojShuf[1]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[mojShuf[2]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[mojShuf[3]] +'</span></div>';

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

    if( answer.getAttribute("class") == "option selec" ){        
        // console.log(vyber);
        // vyber.remove(answer);
        
        // var novy_vyber = [];

        // const index = vyber.indexOf(answer);

        // console.log(index);
        // if (index > -1) { // only splice array when item is found
        //     array.splice(index, 1); // 2nd parameter means remove one item only
        // }

        vyber = retUnq(answer);

        answer.setAttribute("class", "option unselec");

    }else{
        answer.setAttribute("class", "option selec");

        let x = [];
        x.push(answer);
        vyber.push(x);
    }

    // let x = [];
    // x.push(answer);
    // vyber.push(x);


    // answer.setAttribute("class", "option selec");

    // console.log(answer.getAttribute("class"));

    // console.log(answer);
    // document.getElementById(answer).innerHTML = 
    
    // console.log(x);
    // console.log(vyber);
    // optionSelected2(vyber[0][0]);
}

// !!!!!!!!!!!!!!!!!!!!!!  TU POKRACOVAT A PREMENIT TO NECH BERIE ARRAY !!!!!!!!!!!!!!!!!!!!!!!!!!!!
//if user clicked on option
function optionSelected3(){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine

    // console.log(answer);

    //                [ktora odpoved][?]
    let answer = vyber[0][0];
    // console.log(vyber.length);

    for(xi = 0; xi < vyber.length; xi++){
        let answer = vyber[xi][0];
        let userAns = answer.textContent; //getting user selected option
        let correcAns = questions[que_count].answer; //getting correct answer from array
        // const allOptions = option_list.children.length; //getting all option items

        for(xop=0; xop < correcAns.length; xop++){
            if(userAns == correcAns[xop]){ //if user selected option is equal to array's correct answer
                userScore += 1; //upgrading score value with 1
                console.log("CORRECT");
                console.log(userScore);
                answer.classList.add("correct"); //adding green color to correct selected option
                answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
                // console.log("Correct Answer");
                // console.log("Your correct answers = " + userScore);
            }else{
                answer.classList.add("incorrect"); //adding red color to correct selected option
                answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
                // console.log("Wrong Answer");
    
                // for(i=0; i < allOptions; i++){
                //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                //         console.log("Auto selected correct answer.");
                //     }
                // }
            }    

        }

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

        //     // for(i=0; i < allOptions; i++){
        //     //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
        //     //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        //     //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        //     //         console.log("Auto selected correct answer.");
        //     //     }
        //     // }
        // }

    }

    const allOptions = option_list.children.length; //getting all option items
    let correcAns = questions[que_count].answer; //getting correct answer from array

    // console.log(allOptions);

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

    console.log(userScore);

    if (userScore > (my_range_q * 4 * 0.8)){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Gratulujem Sikulka! ❤🎉, Mas <p>'+ userScore +'</p> bodov z <p>'+ (my_range_q * 4) +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore >  (my_range_q * 4 * 0.5)){ // if user scored more than 1
        let scoreTag = '<span>krasne moje 💕 ale treba este trosku popracovat.. Mas <p>'+ userScore +'</p> z <p>'+ (my_range_q * 4) +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>No treba este zamakat 💋... Mas <p>'+ userScore +'</p> z <p>'+ (my_range_q * 4) +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    // let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ (my_upper_range - my_lower_range) +'</p> Questions</span>';
    let totalQueCounTag = '<span><p>'+ index +'</p> z <p>'+ (my_upper_range - my_lower_range) +'</p> (' + my_lower_range + ' - ' + my_upper_range + ')</span>' ;
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


function optionSelected2(){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine

    let correcAns2 = questions[otazky_poradie[que_count]].answer;
    let zvolene_odpoveed_vsetky = [];

    for(a = 0; a < vyber.length; a++){
        let opx = vyber[a][0]
        let b = [opx, false];
        zvolene_odpoveed_vsetky.push(b);
    }

    let mmult = 1;

    if(correcAns2.length == 1){
        mmult = 4;
    }else if(correcAns2.length == 2){
        mmult = 2;
    }else if(correcAns2.length == 3){
        mmult = 1;
    }else if(correcAns2.length == 0){
        userScore += 4;
    }

    for(xop=0; xop < correcAns2.length; xop++){
        let otazka_vyber = correcAns2[xop];
        // console.log(otazka_vyber);
        for(ip = 0; ip < zvolene_odpoveed_vsetky.length; ip++){
            // console.log("zvolena odpoved ip 0 " +  zvolene_odpoveed_vsetky[ip][0].textContent);
            if(otazka_vyber == zvolene_odpoveed_vsetky[ip][0].textContent){
                // sem dat false na correct
                // ak nebude correct tak oznacim ako krizik inak bude true a bude to fajn
                zvolene_odpoveed_vsetky[ip][1] = true;
                // console.log("zvolena odpoved ip 0 " +  zvolene_odpoveed_vsetky[ip][0].textContent);
                // console.log("otzkavyber odpoved ip 0 " +  otazka_vyber);
            }
        }
    }

    for(l = 0; l< zvolene_odpoveed_vsetky.length; l++){

        if(zvolene_odpoveed_vsetky[l][1] == true){
            zvolene_odpoveed_vsetky[l][0].classList.add("correct");
            userScore += (1*mmult);
            // zvolene_odpoveed_vsetky[l][0].classList.add("correct");
            zvolene_odpoveed_vsetky[l][0].insertAdjacentHTML("beforeend", tickIconTag);
        }else{
            zvolene_odpoveed_vsetky[l][0].classList.add("incorrect"); //adding red color to correct selected option
            zvolene_odpoveed_vsetky[l][0].insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
            // console.log("Wrong Answer");
        } 
    }   

    // for(xi = 0; xi < vyber.length; xi++){
    //     console.log("Idem tolkoto krat - vyber length = " + vyber.length);
    //     let answer = vyber[xi][0];
    //     let userAns = answer.textContent; //getting user selected option
    //     let correcAns = questions[que_count].answer; //getting correct answer from array
    //     // const allOptions = option_list.children.length; //getting all option items

    //     for(xop=0; xop < correcAns.length; xop++){
    //         if(userAns == correcAns[xop]){ //if user selected option is equal to array's correct answer
    //             userScore += 1; //upgrading score value with 1
    //             answer.classList.add("correct"); //adding green color to correct selected option
    //             answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    //             // console.log("Correct Answer");
    //             // console.log("Your correct answers = " + userScore);
    //         }
    //         else{
    //             answer.classList.add("incorrect"); //adding red color to correct selected option
    //             answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    //             // console.log("Wrong Answer");
    //         }    
    //     }
    // }

    const allOptions = option_list.children.length; //getting all option items
    let correcAns = questions[otazky_poradie[que_count]].answer; //getting correct answer from array

    // console.log(allOptions);
    //for corrans length, on yi place, if matched get ticked

    for(p = 0; p < correcAns.length; p++){
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns[p]){ //if there is an option which is matched to an array answer
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }

    // for(i=0; i < allOptions; i++){
    //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
    //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //         console.log("Auto selected correct answer.");
    //     }
    // }


    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }

}
