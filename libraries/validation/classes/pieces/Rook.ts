import type { IPiece } from "../../interfaces/IPiece";

export class Rook implements IPiece {
  readonly name = "rook";
  public playerNumber: number;

  constructor(playerNr: number) {
    this.playerNumber = playerNr;
  }

  public validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {
    // horizontal moves
    if (ty - cy === 0 && tx - cx !== 0) return true;
    // vertical moves
    if (tx - cx === 0 && ty - cy !== 0) return true;
    return false;
  }
}
