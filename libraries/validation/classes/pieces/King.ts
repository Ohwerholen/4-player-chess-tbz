import type { IPiece } from "../../interfaces/IPiece";

export class King implements IPiece {
  readonly name = "king";
  public playerNumber: number;

  constructor(playerNr: number) {
    this.playerNumber = playerNr;
  }

  public validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {
    // one field in every direction
    if (Math.abs(tx - cx) > 1 || Math.abs(ty - cy) > 1) return false;
    return true;
  }
}
