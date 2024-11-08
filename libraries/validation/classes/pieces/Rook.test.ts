import { describe, test, expect, beforeEach } from "bun:test";
import { Rook } from "./Rook";

const BCENTER_X = 5;
const BCENTER_Y = 5;

let rook: Rook;
beforeEach(() => (rook = new Rook()));

describe("Valid Rook Moves", () => {
  test("Horizontal Moves", () => {
    expect(rook.validateMove(BCENTER_X, BCENTER_Y, 0, BCENTER_Y)).toBeTrue();
    expect(rook.validateMove(BCENTER_X, BCENTER_Y, 11, BCENTER_Y)).toBeTrue();
  });

  test("Vertical Moves", () => {
    expect(rook.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X, 0)).toBeTrue();
    expect(rook.validateMove(BCENTER_X, BCENTER_Y, BCENTER_X, 11)).toBeTrue();
  });
});

describe("Invalid Rook Moves", () => {
  test("Diagonal Moves", () => {
    expect(rook.validateMove(BCENTER_X, BCENTER_Y, 0, 0)).toBeFalse();
  });
});
