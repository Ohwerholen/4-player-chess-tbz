import type { IPiece } from "../../interfaces/IPiece";
import { BoardUtilities } from "../BoardUtilities";

export class Bishop implements IPiece {
  readonly name = 'bishop';

  constructor() {}

  public validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {
    // diagonal moves
    if (Math.abs(tx - cx) === Math.abs(ty - cy)) return true;
    return false;
  }
}
