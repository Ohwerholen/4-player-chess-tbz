
let width = window.innerWidth;
let height = window.innerHeight;
let chessboard = document.querySelector("chess-board");

const size = Math.min(width, height);

chessboard.style.width = size;
