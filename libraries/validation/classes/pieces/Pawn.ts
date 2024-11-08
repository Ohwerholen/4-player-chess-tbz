import type { IPiece } from "../../interfaces/IPiece";

export class Pawn implements IPiece {
  readonly name = "pawn";
  public playerNumber: number;

  constructor(playerNr: number) {
    this.playerNumber = playerNr;
  }

  validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {return true;}
}
