### 💰 React Treasure Hunt Game

## Overview
Treasure Hunt is the first project that students create at LEARN. During Jumpstart, treasure hunt is done with HTML, CSS, and JavaScript. While this is a perfectly acceptable tech stack, using React allows for more advanced and dynamic code structures.

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

## Learning Objectives
can create a logic component to handle the gameplay
can pass data and behavior from a parent component to a nested component with props
can break down a complex problem to create a desired outcome

## Additional Resources
Render
Process
One person on the team accepts the group assignment from GitHub classroom
Create a team name
Add additional team members via GitHub handle
Clone the newly created repository
cd into the repository
Run $ yarn to install the React dependencies
Create a new branch following the naming instructions described below
Open the repository in a text editor
Code!

## Useful Commands

$ yarn start
control + c (stops the server)
command + t (opens a new terminal tab)

Troubleshooting Tips
Is your server running?
Are your components exported?
Inspect the page and look for errors in the console tab.
Always look at the first error message in the list.

## React Treasure Hunt Game 

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game, and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

## 📚 User Stories
-As a user, I can see a page with a three by three grid board game with a question mark in each square. 
    --- Branch created: grid
    --- Imported the Square component
    --- Passed board as props to the Square component
    --- Since board is an array, use .map() to iterate across the value inside a square
    --- Increase the font size on App.cs
    --- Use flexbox to create a 3x3 grid
    --- Once challenge is completed, push the branch. 
        ! Git Shortcut 
            - git add . (Adds all of the files instead of having to go one by one to add each one.)
        --- Continue the steps to create pull request. Push and merge. Delete branch through Github and remotely. Then on to the next part of the challenge! 

1. Create a branch for each step
2. Go through each file to see what is going on, what is running?, where is everything located?, what is given?
3. When using props as the parameter, it requires dot notation to obtain a specific key. Ex: 
```js 
console.log("props", props)
```
Instead of using prop use from the JS file when passing prop. Option Two Ex:
```js
//in App.js file
<Square board={board}>

//In Square.js
const Square = {{board}} => {
console.log("board", board)
}
//Then call {board} in Square.js
```
We can use props, but we would have to use dot notation! Two options.
4. Have each question mark inside a square: 
```js
{board.map((square, index) => {
    return(
        <div className="square" key={index}>
            {square}
        /div>
    )
})}
```

-As a user, when I click on one of the question marks, an alert appears with the index position of that question mark in the array.
    --- Branch created: alert 
    --- Create a function that will send an alert message with the index position of that question mark in the array. 
    --- Pseudocode: 
        Function Name: handleClick
        Input: Index (number)
        Output: index (number)
        Process: Use alert() to show the index of the selected square. 
    --- Place function on App.js, the container component. 
    --- Perform function call through onClick attribute placed on each Square.js
    --- The argument will be on the index of that square(functional props)
1. 
```js
//Function expression on App.js
const handleClick = (selectedIndex) => {
    //Return something
    alert(selectedIndex)
}
//Function call
<Square board={board} handleClick={handleClick}>

//On Square.js in return
onClick={() => handleClick(index)}
```

-As a user, when I click on one of the question marks, a tree emoji appears instead of the alert.
    --- Branch created: emoji
    --- Pseudocode continuation of process on handleClick:
        Process: Use the setter function 'setBoard' to update the value of the state variable 'board'. Reference the selected square using its index and reassign the value. Because it only copies values, we will encapsulate the spread operator with '[]' to create an array
    --- Emoji: 🏖️ will be used for default emoji 
```js
//On App.js the handleClick function
const handleClick = (selectedIndex) => {
    //Return something
    board[selectedIndex]="🏖️"
    setBoard([...board])
}
```

-As a user, if I select the winning square, the question mark will become a treasure emoji. If I select the losing square, the question mark will become a bomb emoji.
    --- Psuedocode continuation of process on handleClick: Use conditional statements to provide a * for the treasure, 🏖️ will be used for the default emoji. Use setter function and spread operator as reference on the tree emoji usr story. The treasure index will be randomly created using the Math.floor() and Math.random() 

```js
//On App.js 
const handleClick = (selectedIndex) => {
    //Return something
    let treasureIndex = Math.floor(Math.random() * board.length)
    if(treasureIndex === selectedIndex){
        board[selectedIndex] = "*"
        setBoard([...board])
    }else{
        board[selectedIndex] = "🏖️"
        setBoard([...board])
    }
}
```

-As a user, I can click on a “Play Again” button that will restart the game.
-As a user, I can see a counter that shows how many guesses are remaining. The counter starts at five and decrements by one every time I click on a square that is neither the treasure nor the bomb.
-As a user, I can see a message stating that I won the game by selecting the square that contains the treasure.
--As a user, I can see a message stating that I lost the game by selecting the square that contains the bomb.
-As a user, I cannot continue to play the game after I win or lose.
-As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals
Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals
As a developer, I have a well commented application.
As a developer, I have well written README file with instructions on how to access my repository.
As a developer, my variables are all named semantically.
As a developer, I have refactored and efficient code.
As a developer, I have my application deployed as a live website.
