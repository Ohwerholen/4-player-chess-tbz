import { beforeAll, describe, expect, test } from "bun:test";
import { Board } from "./Board";
import { BoardConfiguration } from "./BoardConfiguration";
import { BoardUtilities } from "./BoardUtilities";

let board: Board;
beforeAll(
  () =>
    (board = new Board(BoardConfiguration.getDefaultConfiguration(undefined))),
);

describe("Board Starting Configuration", () => {
  test("Piece Types", () => {
    const expectedMapping = [
      "KRBP    PNRK",
      "RQNP    PBQR",
      "NBPP    PPNB",
      "PPPP    PPPP",
      "            ",
      "            ",
      "            ",
      "            ",
      "PPPP    PPPP",
      "BNPP    PPBN",
      "RQBP    PNQR",
      "KRNP    PBRK",
    ].join("\n");

    expect(board.mapPieces()).toBe(
      expectedMapping,
    );
  });

  test("Player Numbers", () => {
    const expectedMapping = [
      "0000    1111",
      "0000    1111",
      "0000    1111",
      "0000    1111",
      "            ",
      "            ",
      "            ",
      "            ",
      "2222    3333",
      "2222    3333",
      "2222    3333",
      "2222    3333",
    ].join("\n");

    expect(board.mapPlayers()).toBe(
      expectedMapping,
    );
  });
});
