

let menu = document.querySelector('.fa-bars');

let insites = document.querySelector('.insites');

menu.addEventListener('click',(event)=>{
    insites.style.scale = '1'

    // copied from chatGPT
    event.stopPropagation()
});

document.addEventListener('click',()=>{
    insites.style.scale = '0'
})


// copied from chatGPT

// Optional: Add click event listener to the pop-up div to prevent it from closing when clicked inside
insites.addEventListener('click', (event) => {
    // Stop the click event from propagating to the document
    event.stopPropagation();
});













// game logic;





let compChoice = () =>{
    let options = ['rock','paper','scissor'];
    return options[Math.floor(Math.random()*3)];
    
}







let choices = document.querySelectorAll('.choice');


choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        
        finalResults(choice.id,compChoice())
    })
})








let showMessage = document.querySelector('.msg-container');
let userScoreBox = document.querySelector('.player-1-score');
let compScoreBox = document.querySelector('.player-2-score');



let userScore = 0;
let compScore = 0;



let finalResults = (userVal,compVal) => {

    let userWins = true;

    if(userVal==compVal){
        showMessage.innerHTML = 'match draw bcs both have ' + userVal
        return;
    }else if(userVal == 'rock'){
        // compValue can be paper or scissor;
        userWins = (compVal === 'scissor'?true:false);
    }else if(userVal == 'paper'){
        // compValue can be rock or scissor;
        userWins = (compVal === 'rock'?true:false);
    }else if(userVal == 'scissor'){
        // compValue can be paper or rock;
        userWins = (compVal === 'paper'?true:false);
    }

    insertingValues(userWins,userVal,compVal)
}







let insertingValues = (userWins,userVal,compVal) =>{
    if(userWins){
        showMessage.innerHTML = `user wins as ${userVal} beats ${compVal}`;
        userScore++;
        userScoreBox.innerHTML = userScore;

    }else{
        showMessage.innerHTML = `computer wins as ${compVal} beats ${userVal}`;
        compScore++;
        compScoreBox.innerHTML = compScore;
    }
    updateEntryList(userWins,userVal,compVal)
}






let updateEntryList = (userWins,userVal,compVal) =>{


    let entry = createElWithClass('div','entry');
    let userBox = createElWithClass('div','player-1-sign');
    let compBox = createElWithClass('div','player-2-sign');
    let winnerBox = createElWithClass('div','winner-name');
    let rockSign = createElWithClass('i','fa-regular fa-hand-back-fist');
    let paperSign = createElWithClass('i','fa-regular fa-hand');
    let scissorSign = createElWithClass('i','fa-regular fa-hand-scissors');


    if(userVal=='rock'){
        userBox.appendChild(rockSign);
    }else if(userVal ==  'paper'){
        userBox.appendChild(paperSign);
    }else if(userVal == 'scissor'){
        userBox.appendChild(scissorSign);
    }

    
    if(compVal=='rock'){
        compBox.appendChild(rockSign);
    }else if(compVal ==  'paper'){
        compBox.appendChild(paperSign);
    }else if(compVal == 'scissor'){
        compBox.appendChild(scissorSign);
    }

    if(userWins){
        winnerBox.innerHTML = 'user';
    }else{
        winnerBox.innerHTML = 'comp';
    }


    entry.appendChild(userBox);
    entry.appendChild(compBox);
    entry.appendChild(winnerBox);
    insites.appendChild(entry);

}


function createElWithClass (whichEl,classN){
    let el = document.createElement(whichEl);
    el.className = classN
    return el;
}


