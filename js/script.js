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

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

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
        ranges.push(parseInt(novy_range[0]));
        ranges.push(parseInt(novy_range[1]));
    }

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


start_btn.onclick = ()=>{
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

    quiz_box.classList.add("activeQuiz");
    showQuetions(otazky_poradie[que_count]);
    queCounter(1); 
    show_btn.classList.add("show");
    next_btn.classList.add("show");
}


let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let vyber = [];

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(otazky_poradie[que_count]);
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
}


quit_quiz.onclick = ()=>{
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const show_btn = document.querySelector("footer .show_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{

    if(que_count < my_range_q - 1){ 
        que_count++;
        que_numb++; 
        showQuetions(otazky_poradie[que_count]); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine);
        showResult();
    }
    vyber = [];
}

show_btn.onclick = ()=>{
    optionSelected2();
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    // console.log(questions[index].options.length);

    // Array.apply(null, Array(5)).map(function (x, i) { return i; })
    var xa = Array.from({length: questions[index].options.length}, (v, i) => i);
    // console.log(xa);

    var mojShuf = shuffle(xa);

    let question_tag = '<span>' + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[mojShuf[0]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[mojShuf[1]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[mojShuf[2]] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[mojShuf[3]] +'</span></div>';

    que_text.innerHTML = question_tag; 

    option_list.innerHTML = option_tag; 

    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    if( answer.getAttribute("class") == "option selec" ){

        vyber = retUnq(answer);
        answer.setAttribute("class", "option unselec");

    }else{
        answer.setAttribute("class", "option selec");

        let x = [];
        x.push(answer);
        vyber.push(x);
    }
}


function optionSelected3(){
    clearInterval(counter);
    clearInterval(counterLine);

    let answer = vyber[0][0];

    for(xi = 0; xi < vyber.length; xi++){
        let answer = vyber[xi][0];
        let userAns = answer.textContent;
        let correcAns = questions[que_count].answer;

        for(xop=0; xop < correcAns.length; xop++){
            if(userAns == correcAns[xop]){ 
                userScore += 1; 
                console.log("CORRECT");
                console.log(userScore);
                answer.classList.add("correct"); 
                answer.insertAdjacentHTML("beforeend", tickIconTag); 
            }else{
                answer.classList.add("incorrect"); 
                answer.insertAdjacentHTML("beforeend", crossIconTag); 
            }    
        }
    }

    const allOptions = option_list.children.length; 
    let correcAns = questions[que_count].answer;

    for(i=0; i < allOptions; i++){
        if(option_list.children[i].textContent == correcAns){ 
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
            console.log("Auto selected correct answer.");
        }
    }
}

function showResult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");

    console.log(userScore);

    if (userScore > (my_range_q * 4 * 0.8)){ 
        let scoreTag = '<span>Gratulujem Sikulka! ❤🎉, Mas <p>'+ userScore +'</p> bodov z <p>'+ (my_range_q * 4) +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore >  (my_range_q * 4 * 0.5)){ 
        let scoreTag = '<span>krasne moje 💕 ale treba este trosku popracovat.. Mas <p>'+ userScore +'</p> z <p>'+ (my_range_q * 4) +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>No treba este zamakat 💋... Mas <p>'+ userScore +'</p> z <p>'+ (my_range_q * 4) +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function queCounter(index){
    // let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ (my_upper_range - my_lower_range) +'</p> Questions</span>';
    let totalQueCounTag = '<span><p>'+ index +'</p> z <p>'+ (my_upper_range - my_lower_range) +'</p> (' + my_lower_range + ' - ' + my_upper_range + ')</span>' ;
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}


function optionSelected2(){
    clearInterval(counter); 
    clearInterval(counterLine); 

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
        for(ip = 0; ip < zvolene_odpoveed_vsetky.length; ip++){
            if(otazka_vyber == zvolene_odpoveed_vsetky[ip][0].textContent){
                // sem dat false na correct
                // ak nebude correct tak oznacim ako krizik inak bude true a bude to fajn
                zvolene_odpoveed_vsetky[ip][1] = true;
            }
        }
    }

    for(l = 0; l< zvolene_odpoveed_vsetky.length; l++){

        if(zvolene_odpoveed_vsetky[l][1] == true){
            zvolene_odpoveed_vsetky[l][0].classList.add("correct");
            userScore += (1*mmult);
            zvolene_odpoveed_vsetky[l][0].insertAdjacentHTML("beforeend", tickIconTag);
        }else{
            zvolene_odpoveed_vsetky[l][0].classList.add("incorrect");
            zvolene_odpoveed_vsetky[l][0].insertAdjacentHTML("beforeend", crossIconTag); 
        } 
    }   

    const allOptions = option_list.children.length; 
    let correcAns = questions[otazky_poradie[que_count]].answer; 

    for(p = 0; p < correcAns.length; p++){
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns[p]){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }

}