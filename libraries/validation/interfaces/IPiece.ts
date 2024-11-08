export interface IPiece {
  readonly name: string;
  playerNumber: number;
  validateMove(cx: number, cy: number, tx: number, ty: number): Boolean;
}
