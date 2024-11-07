import type { IPiece } from "../../interfaces/IPiece";

export class Knight implements IPiece {
  readonly name = "knight";
  public playerNumber: number;

  constructor(playerNr: number) {
    this.playerNumber = playerNr;
  }

  public validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {
    const diffX = Math.abs(tx - cx),
      diffY = Math.abs(ty - cy);
    // rook jumps
    if (diffX === 2 && diffY === 1) return true;
    if (diffX === 1 && diffY === 2) return true;
    return false;
  }
}
