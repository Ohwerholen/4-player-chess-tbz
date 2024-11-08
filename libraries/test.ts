import { Board, BoardConfiguration, BoardUtilities } from "./validation/index";

const board = new Board(BoardConfiguration.getDefaultConfiguration(undefined));

console.log(board.mapPieces());
console.log('------------');

console.log(board.move(2, 'C5'));
:w//console.log(board.move('B1', 'F6'));
console.log('------------');

console.log(board.mapPieces());
console.log('------------');
