let body = document.querySelector('body');
let grid = document.createElement('div');
for(let i = 0; i < 9; i++) {
  let button = document.createElement('button');
  button.addEventListener('click', () => console.log(`${i+1}`));
  grid.appendChild(button);
};
body.appendChild(grid);

let playerSelected = document.createElement('div');
playerSelected.className = 'playerSelected';
body.appendChild(playerSelected);

let playerStatement = document.createElement('h2');
playerSelected.appendChild(playerStatement);

let playerUp = 'x';

let gameboard = (function() {
  return {board: ['', '', '', '', '', '', '', '', '']};
})();

/*

Factory function to create player
Module for gameboard (logic, not html)
Module for controlling display
Module for game logic

//

Factory function to create player with name?

Function to select where to play

Function to check if someone won

Function to state whose turn it is

Function to change turn

Function to reset game

Logic to prevent selecting already selected button

*/