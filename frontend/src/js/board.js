((func) => {
  func();
})(() => {
  /**
   * @type {HTMLLIElement[]}
   */
  const boardTiles = document.querySelectorAll(".chess-board>li");
  /**
   * @type {HTMLImageElement[]}
   */
  const pieces = document.querySelectorAll(".chess-board>li>img");

  function handleDragStart() {
    this.ctx.piece = this.piece;
  }

  function handleDragEnter() {
    this.ctx.tile = this.tile;
  }

  function handleDragEnd() {
    const { tile, piece } = this.ctx;
    const priorPiece = tile.querySelector('*');

    if (priorPiece !== null)
      priorPiece.remove();

    piece.remove();
    tile.appendChild(piece);
  }

  const context = {};

  boardTiles.forEach((tile) => {
    tile.addEventListener("dragover", ev => ev.preventDefault());
    tile.addEventListener("dragenter", handleDragEnter.bind({ ctx: context, tile }));
    tile.addEventListener("dragend", handleDragEnd.bind({ ctx: context, tile }));
    //tile.addEventListener("drop", console.log);
  });

  pieces.forEach((piece) => {
    piece.addEventListener('dragstart', handleDragStart.bind({ ctx: context, piece }));
  });
});
