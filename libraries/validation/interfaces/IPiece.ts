export interface IPiece {
  readonly name: String;
  validateMove(cx: number, cy: number, tx: number, ty: number): Boolean;
}
