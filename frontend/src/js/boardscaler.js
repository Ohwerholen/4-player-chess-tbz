
let width = window.innerWidth;
let height = window.innerHeight;
let chessboard = document.querySelector("chess-board");

const size = Math.min(width, height) - 30;

document.querySelector(".chess-board").style.width = `${size}px`;