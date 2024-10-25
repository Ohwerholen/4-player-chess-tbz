import type { IPiece } from "../interfaces/IPiece";
import { BoardUtilities } from "./BoardUtilities";

// board size
const BSIZE = 12;

export class Board {
  private tiles: (IPiece | undefined)[];

  constructor(tiles: ((IPiece | undefined)[] | undefined) = undefined) {
    this.tiles = tiles ?? new Array(BSIZE * BSIZE);
  }

  private getPiece(x: number, y: number): (IPiece | undefined) {
    const piece = this.tiles[y * BSIZE + x];
    return piece;
  }

  private setPiece(x: number, y: number, piece: (IPiece | undefined)) {
    this.tiles[y * 12 + x] = piece;
  }

  public move(from: String, to: String): Boolean {
    const {x: cx, y: cy} = BoardUtilities.parseCoordinates(from);
    const {x: tx, y: ty} = BoardUtilities.parseCoordinates(to);
    
    const piece = this.getPiece(cx, cy);
    if (piece === undefined)
      return false;

    const isValid = piece.validateMove(cx, cy, tx, ty);
    if (!isValid)
      return false;

    this.setPiece(cx, cy, undefined);
    this.setPiece(tx, ty, piece);
    
    return true;
  }
}
