import { Board, BoardConfiguration } from "./validation/index";

const board = new Board(BoardConfiguration.getDefaultConfiguration(undefined));

console.log(board.mapPlayers());
console.log('------------');

//console.log(board.move('B3', 'B5'));
console.log(board.move('B1', 'B6'));
console.log('------------');

console.log(board.mapPlayers());
console.log('------------');
