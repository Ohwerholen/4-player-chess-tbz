import { beforeEach, describe, expect, test } from "bun:test";
import { Bishop } from "./Bishop";

const BCENTER_X = 5;
const BCENTER_Y = 5;
const ODDPOS_X = 6;
const ODDPOS_Y = 5;

let bishop: Bishop;
beforeEach(() => (bishop = new Bishop()));

describe("Valid Bishop Moves", () => {
  test("Diagonal Moves", () => {
    expect(
      bishop.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X + 2, BCENTER_Y + 2),
    ).toBeTrue();
    expect(
      bishop.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X - 2, BCENTER_Y - 2),
    ).toBeTrue();
    expect(
      bishop.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X - 2, BCENTER_Y + 2),
    ).toBeTrue();
    expect(
      bishop.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X + 2, BCENTER_Y - 2),
    ).toBeTrue();

    expect(
      bishop.validateMove(ODDPOS_X, ODDPOS_Y, ODDPOS_X + 2, ODDPOS_Y + 2),
    ).toBeTrue();
    expect(
      bishop.validateMove(ODDPOS_X, ODDPOS_Y, ODDPOS_X - 2, ODDPOS_Y - 2),
    ).toBeTrue();
    expect(
      bishop.validateMove(ODDPOS_X, ODDPOS_Y, ODDPOS_X - 2, ODDPOS_Y + 2),
    ).toBeTrue();
    expect(
      bishop.validateMove(ODDPOS_X, ODDPOS_Y, ODDPOS_X + 2, ODDPOS_Y - 2),
    ).toBeTrue();
  });
});

describe("Invalid Moves", () => {
  test("Straight Moves", () => {
    expect(
      bishop.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X, BCENTER_Y - 2),
    ).toBeFalse();
    expect(
      bishop.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X + 2, BCENTER_Y),
    ).toBeFalse();
  });
});
