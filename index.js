//  intializing winning/losing/theme sounds
let winS = new Audio("yas1.mp3");
let losingSound = new Audio("fail.mp3");
let songTheme = new Audio("song.mp3");


//  to locate what to display in status status box:

//  Main box
let winningDiv= document.querySelector(".winning");
//  Gif and text:
let winningImage = document.querySelector('.winningPic');
let winText = document.querySelector('#info');



//  intializing flag for switching
let flag =false;
//  Intitalizing 2nd flag so (users cannot change emojies in the middle of the game) #Lazy:
let flag2 = false; 



// intialization(type of event): 
const eventType = 'click';

// setting players(Target):
const sadButton   = document.querySelector('#🥔');
const happyButton = document.querySelector('#🍟');
//  setting reset button:
const reset       = document.querySelector('#reset');




//  Setting Sad potato as a default player:
let playerTurn = sadButton.innerText;



//  displaying players on the display section:
const turns = document.querySelector('.Turns');
turns.innerText = playerTurn;





//  setting players turns:

// 1- Sad potato
const sadFirst = function(){
    //  If the game hasn't started && no winning condition
    if (flag2 ===false && flag ===false){
        
         // Theme song:
        songTheme.play();
        alert("Potato plays first!");

        //  Setting turns:
        playerTurn = sadButton;

        //  2nd flag (Game has started)
        flag2 = true; 

        //  displaying potato on the (player turn) screen 
        sadButton.innerText= ('🥔');
        turns.innerText = playerTurn.innerText;

}
//  function when users suddenly changes emoji
    else{
        alert("Reality Check - You can't transform all at once")
    }
}
//  Event when users chooses sad potato at the beginning of the game:
sadButton.addEventListener('click',sadFirst);



// 2- happy potato 
const happyFirst = function(){
    //  If the game hasn't started && no winning condition
    if  (flag2 ===false && flag ===false){

        // Theme song:
        songTheme.play();
        alert("French Fry plays first!");

        //  Setting turns:
        playerTurn = happyButton;

       
        //2nd flag (Game has started)
        flag2 = true; 

         //displaying Frenchfry on the (player turn) screen 
        happyButton.innerText= ('🍟');
        turns.innerText = playerTurn.innerText; 
}
//  function when users suddenly changes emoji
    else{
        alert("Reality Check - You can't transform all at once");
    }
}
//  Event when users chooses Frenchfry at the beginning of the game
happyButton.addEventListener('click', happyFirst); 





//  Adding elements in the board:
let table = document.querySelectorAll('.cell');

//  To count each move for the Tie condition:
let counter = 0;

const adding = function (){
    //  adding theme songs in the beginning of the game
    songTheme.play();
    

    if(playerTurn ==happyButton){
        console.log("Furrrraies");
        counter++;
        this.innerText='🍟';

        //  adding 2nd flag (Users cant change emojies)
        flag2=true;

        console.log(counter);

        //  So elements cannot be change during the game:
        this.removeEventListener('click',adding);

        //  checking winning conditions:
        checkingPlayerTurn();
    }
    else{
        console.log("Pootaatoo");
        counter++;
        this.innerText='🥔';

        //  adding 2nd flag (Users cant change emojies)
        flag2=true;

        console.log(counter);

        //  So elements cannot be change during the game:
        this.removeEventListener('click',adding);

        //  checking winning conditions:
        checkingPlayerTurn();
    }

    //  Displaying player turn
    turns.innerText = playerTurn.innerText;
}



//  Function so all cells are clickable and connected:
    for (let i=0; i< table.length; i++){
        table[i].addEventListener("click",adding );
}


// A function to add listener after reset #LAZY 
function addingListener() {
    for (let i=0; i< table.length; i++){
        table[i].addEventListener("click",adding );
    }
}





//  Switching players:
function checkingPlayerTurn(){

//  checking winning conditions:    
    win();

//  flag is added so the player wont switch at the end of the game:
    if(flag === false){
        if (playerTurn === happyButton){
                playerTurn = sadButton;
    }
        else {
                playerTurn = happyButton; 

        }   
    }
}


//Winning statement:

    //Clearing all previous actions from board:
function winning(){

    for (let i=0; i< table.length; i++){
        table[i].removeEventListener("click",adding);
    }
    //playing sound before label:
    winS.play();
    songTheme.pause();
    winningDiv.style.display="inline";
    winText.innerText = "Winner is "+ playerTurn.innerText;
    winningImage.setAttribute('src', "pic2.gif");
setTimeout(()=>{
    // alert("Winner is "+ playerTurn.innerText);
    //auto reset
    resetting();
    counter =0;
    },3000)

}


//  Tie condition:
function tie(){
    //  playing sound before label
    songTheme.pause();
    losingSound.play();
    // alert("Potato for eternity!");
    winningDiv.style.display="inline";
    winText.innerText = "Potato for eternity!";
    winningImage.setAttribute('src', "pic1.gif");
    setTimeout(()=>{
        // // alert("Potato for eternity!");
        // //auto reset
        resetting();
        counter =0;
    },3000)
    }
    

//Winning Conditions:
function win(){
    //Rows:
   
    //1
    if(table[0].innerText=== table[1].innerText &&  table[1].innerText=== table[2].innerText){
        flag = true;
        //to exit the function
        return winning();
        
       
        
    }

    //2
    if(table[3].innerText=== table[4].innerText &&  table[4].innerText=== table[5].innerText){
        flag = true;
        //to exit the function

        return winning();
        
    }

    //3
    if(table[6].innerText=== table[7].innerText &&  table[7].innerText=== table[8].innerText){
        flag = true;
        //to exit the function
        return  winning();
    }

    //columns:

    //4
    if(table[0].innerText=== table[3].innerText &&  table[3].innerText=== table[6].innerText){
        flag = true;
        winning();
        //to exit the function
        return winning();
    }

    //5
    if(table[1].innerText=== table[4].innerText &&  table[4].innerText=== table[7].innerText){
        flag = true;
        //to exit the function
        return winning();
    }

    //6
    if(table[2].innerText=== table[5].innerText &&  table[5].innerText=== table[8].innerText){
        flag = true;
        //to exit the function
        return winning();
    }

    
    //Crisscross:
    //7
    if(table[0].innerText=== table[4].innerText &&  table[4].innerText=== table[8].innerText){
        flag = true;
        //to exit the function
        return winning();
    }

    //8
    if(table[2].innerText=== table[4].innerText &&  table[4].innerText=== table[6].innerText){
        flag = true;
        //to exit the function
        return winning();    
   
   
   
    }
    //Tie funcrion
    else if (counter==9) {
        flag= true;
        tie();
    }
}


//Function reset button
function resetting(){
    for(let i=0;i<table.length;i++){
        table[i].innerText=i;
        songTheme.play();
        addingListener();
        flag = false;
        flag2= false;
        counter =0;
        winningDiv.style.display="none";

    }
}//when clicking the button
reset.addEventListener('click',resetting);

