import type { IPiece } from "../interfaces/IPiece";

export class BoardUtilities {
  public static strToXY(str: String): { x: number; y: number } {
    if (str.length !== 2) throw Error("Invalid Input Length");
    const colStr = str[0],
      rowStr = str[1];
    const column = parseInt(colStr, 23) - 10,
      row = parseInt(rowStr, 13) - 1;
    return { x: column, y: row };
  }

  public static checkCoordinateBounds(x: number, y: number): Boolean {
    return !(x < 0 || y < 0 || x > 11 || y > 11);
  }

  public static xyToIndex(x: number, y: number) {
    return y * 12 + x;
  }

  public static indexToXY(i: number) {
    const cx = i % 12;
    const cy = (i - cx) / 12;

    return {
      x: cx,
      y: cy,
    };
  }

  public static pieceToLetter(piece: IPiece | undefined): string {
    let name: string = " ";
    if (piece !== undefined) name = piece.name;

    switch (name) {
      case "knight":
        return "N";
      case " ":
        return " ";
      default:
        return name[0].toUpperCase();
    }
  }

  public static playerNumberToLetter(piece: IPiece | undefined): string {
    let letter = " ";
    if (piece !== undefined) letter = piece.playerNumber.toString();
    return letter;
  }

  public static mapPlayerNumbersToASCII(tiles: (IPiece | undefined)[]): string {
    let str = "";
    for (let y = 0; y < 12; y++) {
      let row = "";
      for (let x = 0; x < 12; x++)
        row += BoardUtilities.playerNumberToLetter(
          tiles[BoardUtilities.xyToIndex(x, y)],
        );
      if (y !== 0) row += "\n";
      str = row + str;
    }
    return str;
  }

  public static mapPieceTypesToASCII(tiles: (IPiece | undefined)[]): string {
    let str = "";
    for (let y = 0; y < 12; y++) {
      let row = "";
      for (let x = 0; x < 12; x++)
        row += BoardUtilities.pieceToLetter(
          tiles[BoardUtilities.xyToIndex(x, y)],
        );
      if (y !== 0) row += "\n";
      str = row + str;
    }
    return str;
  }
}
