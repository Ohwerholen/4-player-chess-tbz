import type { IPiece } from "../../interfaces/IPiece";

export class Bishop implements IPiece {
  readonly name = "bishop";
  public playerNumber: number;

  constructor(playerNr: number) {
    this.playerNumber = playerNr;
  }

  public validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {
    // diagonal moves
    if (Math.abs(tx - cx) === Math.abs(ty - cy)) return true;
    return false;
  }
}
