let body = document.querySelector('body');
let grid = document.createElement('div');
let button = '<button></button>'
let buttons = [];
for(let i = 0; i < 9; i++) {
  buttons.push(button)
};
grid.innerHTML = buttons.join('');

body.appendChild(grid);

let gameboard = (function() {
  return {board: ['', '', '', '', '', '', '', '', '']};
})();