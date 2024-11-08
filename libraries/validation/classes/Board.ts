import type { IPiece } from "../interfaces/IPiece";
import { BoardUtilities } from "./BoardUtilities";

// board size
const BSIZE = 12;

export class Board {
  private tiles: (IPiece | undefined)[];

  constructor(tiles: (IPiece | undefined)[] | undefined = undefined) {
    this.tiles = tiles ?? new Array(BSIZE * BSIZE);
  }

  private getPiece(x: number, y: number): IPiece | undefined {
    const piece = this.tiles[y * BSIZE + x];
    return piece;
  }

  private setPiece(x: number, y: number, piece: IPiece | undefined) {
    this.tiles[y * 12 + x] = piece;
  }

  public move(from: number, to: number): boolean | null {
    const { x: cx, y: cy } = BoardUtilities.indexToXY(from);
    const { x: tx, y: ty } = BoardUtilities.indexToXY(to);

    const piece = this.getPiece(cx, cy);
    if (piece === undefined) return null;

    const isValid = piece.validateMove(cx, cy, tx, ty);
    if (!isValid) return false;

    this.setPiece(cx, cy, undefined);
    this.setPiece(tx, ty, piece);

    return true;
  }

  public mapPieces(): string {
    return BoardUtilities.mapPieceTypesToASCII(this.tiles);
  }

  public mapPlayers(): string {
    return BoardUtilities.mapPlayerNumbersToASCII(this.tiles);
  }
}
