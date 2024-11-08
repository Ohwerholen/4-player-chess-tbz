import { beforeAll, describe, expect, test } from 'bun:test';
import { Knight } from './Knight';

let knight: Knight;
beforeAll(() => knight = new Knight(0));

describe('Valid Knight Moves', () => {
  test('Jumping Moves', () => {
    expect(knight.validateMove(0, 0, 2, 1)).toBeTrue();
    expect(knight.validateMove(0, 0, 1, 2)).toBeTrue();
  });
});
