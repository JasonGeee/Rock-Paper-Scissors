# Rock-Paper-Scissors
Building a Rock-Paper-Scissors website!

Most documentation can be see in the code itself. But since I am blogging all my production and learning, I will do so here.

### Creating the project

1) First we must Understand, Plan, and Divide (and conquer).
    - To do so, we must understand the problem/project.
    - We are creating a very simple game
    - Different way to win

2) Planning out the game
    - There are instructions in the TOP project website, so we'll go from there. [Rock-paper-scissors](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors)
    - More planning will be inside the JS code

3) Divide
    - Broke the problem into smaller parts. Steps were created in the JS file.

Dev tools in Google Chrome was a life saver!!!! Was able to find out why the player selection was never changing. Did an event listener breakpoint for going through each javascript line of code. Saw some of the updates that weren't being made and some that were. Dev tools definitely helped debug this little game I created. Will add more updates as soon we get back to this.

/* Step 1: Create a function that generates a random answer to play the game and return that random answer */

/* 
Step 2: create a function or a regular prompt that will get user input from a prompt window. Convert that string into all lowercase to validate all inputs 
Example: ROCK, RocK and rock will all be accepted

FOR THIS PROJECT, WE WILL IGNORE IF USER ENTERS INVALID INPUTS.
Later on, I will be creating button that will only have rock, paper, or scissors. So invalid input will be impossible.
*/

/*
Step 3: Create a function that will create the game and check both user selection and computer selection.
        Also create a counter for player score and computer score.

Check and see who wins.
If player is rock and computer is scissors, player wins. playerScore + 1
If player is scissors and computer is paper, player wins. playerScore + 1
If player is paper and computer is rock, player wins. playerScore + 1

Only other condition left if the first 3 dont meet.
Else computer wins. computerScore + 1

Figure out a way to keep looping through this function

*/