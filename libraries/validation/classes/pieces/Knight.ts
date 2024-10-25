import type { IPiece } from "../../interfaces/IPiece";

export class Knight implements IPiece {
  constructor() {}

  readonly name = 'knight';

  public validateMove(cx: number, cy: number, tx: number, ty: number): Boolean {
    const diffX = tx - cx,
      diffY = ty - cy;
    // rook jumps
    if (diffX === 3 && diffY === 2) return true;
    if (diffX === 2 && diffY === 3) return true;
    return false;
  }
}
