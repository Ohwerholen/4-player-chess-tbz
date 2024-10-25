export class BoardUtilities {
  public static parseCoordinates(coords: String): { x: number; y: number } {
    if (coords.length !== 2) throw Error("Invalid Input Length");
    const colStr = coords[0],
      rowStr = coords[1];
    const column = parseInt(colStr, 23) - 10,
      row = parseInt(rowStr, 13) - 1;
    return { x: column, y: row };
  }

  public static checkCoordinateBounds(x: number, y: number): Boolean {
    return !(x < 0 || y < 0 || x > 11 || y > 11);
  }
}
