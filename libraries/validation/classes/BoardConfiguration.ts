import type { IPiece } from "../interfaces/IPiece";
import { BoardUtilities } from "./BoardUtilities";
import { Bishop } from "./pieces/Bishop";
import { King } from "./pieces/King";
import { Knight } from "./pieces/Knight";
import { Pawn } from "./pieces/Pawn";
import { Queen } from "./pieces/Queen";
import { Rook } from "./pieces/Rook";

export enum PlayerType {
  TL = 0,
  TR = 1,
  BL = 2,
  BR = 3,
}

export class BoardConfiguration {
  private static applyWhiteDefault(tiles: (IPiece | undefined)[]) {
    const playerType = PlayerType.TL;

    tiles[BoardUtilities.xyToIndex(0, 11)] = new King(playerType);
    tiles[BoardUtilities.xyToIndex(1, 11)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(2, 11)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(3, 11)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(0, 10)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(1, 10)] = new Queen(playerType);
    tiles[BoardUtilities.xyToIndex(2, 10)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(3, 10)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(0, 9)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(1, 9)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(2, 9)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(3, 9)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(0, 8)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(1, 8)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(2, 8)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(3, 8)] = new Pawn(playerType);
  }

  private static applyCyanDefault(tiles: (IPiece | undefined)[]) {
    const playerType = PlayerType.BL;

    tiles[BoardUtilities.xyToIndex(0, 0)] = new King(playerType);
    tiles[BoardUtilities.xyToIndex(1, 0)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(2, 0)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(3, 0)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(0, 1)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(1, 1)] = new Queen(playerType);
    tiles[BoardUtilities.xyToIndex(2, 1)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(3, 1)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(0, 2)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(1, 2)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(2, 2)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(3, 2)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(0, 3)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(1, 3)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(2, 3)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(3, 3)] = new Pawn(playerType);
  }

  private static applyYellowDefault(tiles: (IPiece | undefined)[]) {
    const playerType = PlayerType.TR;

    tiles[BoardUtilities.xyToIndex(11, 11)] = new King(playerType);
    tiles[BoardUtilities.xyToIndex(10, 11)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(9, 11)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(8, 11)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(11, 10)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(10, 10)] = new Queen(playerType);
    tiles[BoardUtilities.xyToIndex(9, 10)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(8, 10)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(11, 9)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(10, 9)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(9, 9)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(8, 9)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(11, 8)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(10, 8)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(9, 8)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(8, 8)] = new Pawn(playerType);
  }

  private static applyBlackDefault(tiles: (IPiece | undefined)[]) {
    const playerType = PlayerType.BR;

    tiles[BoardUtilities.xyToIndex(11, 0)] = new King(playerType);
    tiles[BoardUtilities.xyToIndex(10, 0)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(9, 0)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(8, 0)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(11, 1)] = new Rook(playerType);
    tiles[BoardUtilities.xyToIndex(10, 1)] = new Queen(playerType);
    tiles[BoardUtilities.xyToIndex(9, 1)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(8, 1)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(11, 2)] = new Knight(playerType);
    tiles[BoardUtilities.xyToIndex(10, 2)] = new Bishop(playerType);
    tiles[BoardUtilities.xyToIndex(9, 2)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(8, 2)] = new Pawn(playerType);

    tiles[BoardUtilities.xyToIndex(11, 3)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(10, 3)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(9, 3)] = new Pawn(playerType);
    tiles[BoardUtilities.xyToIndex(8, 3)] = new Pawn(playerType);
  }

  public static getDefaultConfiguration(
    tiles: (IPiece | undefined)[] | undefined,
  ): (IPiece | undefined)[] {
    const _tiles: (IPiece | undefined)[] = tiles ?? new Array(12 * 12);
    this.applyWhiteDefault(_tiles);
    this.applyCyanDefault(_tiles);
    this.applyYellowDefault(_tiles);
    this.applyBlackDefault(_tiles);
    return _tiles;
  }
}
