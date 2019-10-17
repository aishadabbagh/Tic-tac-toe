<h1>Project01: Tic-Tac-Toe:</h1>
<h2>Aisha Dabbagh</h2>

<h3>Table of content:</h3>
- Introduction
- Methodology 
- User features
- Technology used
- Challenges
- Procedures (Experience + solved for winner)
- Future plans





<h3>Introduction:</h3>
General Assembly SEI first project requires student to individually implement a tic-tac-toe
game to examine each student's technical skills and encourage them 
to seek for optimized solution; and expand their tech knowledge. 


<h4>Tic-Tac-Toe explanation:</h4>
Tic-tac-toe (American English), or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.





<h3>Methodology:</h3>
According to the games wining rules, winning can achieved with three markings horizontal, vertical, or diagonal. In the following I have used this logic to check winning conditions:
  1-
    table[0]=== table[1] &&  table[1] === table[2]
    2-
    table[3]=== table[4] &&  table[4]=== table[5]
    3- 
    table[6]=== table[7]&&  table[7]=== table[8]
    //columns:
    4-
    table[0]=== table[3] &&  table[3]=== table[6]
    5-
    table[1]=== table[4] &&  table[4]=== table[7]
    6-
    table[2]=== table[5] &&  table[5] === table[8]
    //Crisscross:
    7-
    table[0]=== table[4]&&  table[4]=== table[8]
    8-
    table[2]=== table[4] &&  table[4]=== table[6]
   





<h3>User features:</h3>
-	User can start a new tic tac toe game
-	User can click on a square to add French fry first and then Potato and so on
-	User can see a message after each turn for when winning, losing, or even tie 
-	User can should not be able to click the same square twice
-	User should not be able to continue playing once winning, losing, or tie
-	User should be able to play the game again without refreshing the page
-	User can choose what emoji to play with

<h3>Technology used:</h3>
-	JavaScript, CSS, html, Git, DOM, jpg, Gif

<h3>Challenges:</h3> 
Trying to understand the main function and integrating it with other elements using DOM


<h3>Procedures:</h3>
-	User picks which emojie to play with through functions:
sadFirst() and happyFirst();
-	For loop to add function addEventListener with event ‘click’
-	Used function adding () to check if its players turn the player can add his/her emojie and in parallel  check for winning conditions.
-	<h5>Used 2 flags:</h5>
1-	Flag: to check users turns and when winning it doesn’t switch turns
2-	Flag1: to allow user to only choose an emojie once.
-	Used style.display() to display results
-	Used time out for resetting and showing the results.
-	Used Counter to check for tie condition
-	And used a for loop for to refill the array and add listener to each cell. 



<h3>Future Plans:</h3>
-	User will be able to see scores. 
-	User will be able to play with the computer 
-	User will be able to play against other competitors from different areas.
-	Site will be full responsive 

