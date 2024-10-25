import type { IPiece } from "../../interfaces/IPiece";

export class Queen implements IPiece {
  constructor() {}

  readonly name = 'queen';

  public validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {
    // horizontal moves
    if (ty - cy === 0 && tx - cx !== 0) return true;
    // vertical moves
    if (tx - cx === 0 && ty - cy !== 0) return true;
    // diagonal moves
    if (Math.abs(tx - cx) === Math.abs(ty - cy)) return true;
    return false;
  }
}
