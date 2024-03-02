# Hit/Miss Game 🎯

This is a simple game to test your reaction speed and accuracy.

## How to Play 🕹

- A random number between 0-9 will be displayed as the "Hit" number.

- The game board will be populated with bubbles containing random numbers. 

- Click on the bubble that matches the "Hit" number as quickly as you can.

- You get 10 points :tada: for each successful hit.

- You have 30 seconds ⏱ to get as many hits as possible.

- The timer will count down and the game will end when time runs out.

## Files 🗂

- `index.html` - Contains the HTML structure for the game

- `style.css` - Styles the page and game elements 

- `script.js` - Contains the game logic and interactivity

- `README.md` - This file explaining the game

## How it Works ⚙️

- When the page loads, the `runTimer()` function starts a 30 second countdown timer.

- The `getNewHit()` function generates a new random number for the "Hit" display.

- `makeBubble()` populates the game board with bubbles containing random numbers.

- Clicking a bubble triggers the click event listener. 

- If the bubble number matches the "Hit" number, the `incScr()` function increments the score.

- Then new bubbles are generated and a new "Hit" number is picked.

- When the timer reaches 0, the game board is cleared and the game over message is shown with the final score.

## Customization ✏️

The game can be customized by editing variables and values:

- `timer` - Sets length of game in seconds

- `score` - Starting score value

- Number of bubbles generated in `makeBubble()` 

- Point value for a successful hit in `incScr()`

- Colors, fonts, sizes etc can be edited in `style.css`.

- Additional features could be added like sound effects, difficulty levels, high score tracking etc.

## Demo 🎥
![Hit_Miss-GoogleChrome2024-03-0217-40-31-ezgif com-video-to-gif-converter (1)](https://github.com/Ibrahim-Naseef/Hit-Miss-Game/assets/156147657/2ba10e14-11b4-44d6-bd31-e59e3f726ac0)




## Here is a link to a live demo: [Hit/Miss Game Demo](https://ibrahim-naseef.github.io/Hit-Miss-Game/)

