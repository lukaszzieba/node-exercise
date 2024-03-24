import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { BasketballParser } from './basketball';
import { INVALID_SCORE_TYPE, Match } from '../types';

const match: Match = {
  sport: 'basketball',
  participant1: 'p1',
  participant2: 'p2',
  score: [
    ['9:7', '2:1'],
    ['5:3', '9:9'],
  ],
};

describe('Basketball parser', () => {
  let parser: BasketballParser;
  beforeEach(() => {
    parser = new BasketballParser();
  });

  it('should parse name', () => {
    const name = parser.makeEventName(match);
    assert.equal(name, 'p1 - p2');
  });

  it('should parse score', () => {
    const name = parser.formatScore(match);
    assert.strictEqual(name, '9:7,2:1,5:3,9:9');
  });

  it('should throw error when score type is invalid', () => {
    const err = new Error(INVALID_SCORE_TYPE);
    assert.throws(() => parser.formatScore({ ...match, score: '' }), err);
  });
});
