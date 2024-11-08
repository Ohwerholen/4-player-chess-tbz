import { Board, BoardConfiguration } from "/validation.js";

/**
 * @type {HTMLLIElement[]}
 */
const boardTiles = document.querySelectorAll(".chess-board>li");
/**
 * @type {HTMLImageElement[]}
 */
const pieces = document.querySelectorAll(".chess-board>li>img");

const board = new Board(BoardConfiguration.getDefaultConfiguration(undefined));

let ny = 0;
for (let y = 11; y >= 0; y--) {
  for (let x = 0; x < 12; x++) {
    let tile = boardTiles[y * 13 + x];
    tile.setAttribute("data-index", (ny * 12 + x).toString());
  }
  ny++;
}

function handleDragStart() {
  this.ctx.piece = this.piece;
}

function handleDragEnter() {
  this.ctx.tile = this.tile;
}

function handleDragEnd() {
  const { tile, piece } = this.ctx;
  const priorPiece = tile.querySelector("*");

  const currentIndex = parseInt(piece.parentNode.getAttribute("data-index"));
  const targetIndex = parseInt(tile.getAttribute("data-index"));

  if (board.move(currentIndex, targetIndex)) {
  if (priorPiece !== null) priorPiece.remove();
    piece.remove();
    tile.appendChild(piece);
  }
}

const context = {};

boardTiles.forEach((tile) => {
  tile.addEventListener("dragover", (ev) => ev.preventDefault());
  tile.addEventListener(
    "dragenter",
    handleDragEnter.bind({ ctx: context, tile }),
  );
  tile.addEventListener("dragend", handleDragEnd.bind({ ctx: context, tile }));
  //tile.addEventListener("drop", console.log);
});

pieces.forEach((piece) => {
  piece.addEventListener(
    "dragstart",
    handleDragStart.bind({ ctx: context, piece }),
  );
});
