import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { HandballParser } from './handball';
import { INVALID_SCORE_TYPE, Match } from '../types';

const match: Match = {
  sport: 'handball',
  participant1: 'p1',
  participant2: 'p2',
  score: '33:22',
};

describe('Handball parser', () => {
  let parser: HandballParser;
  beforeEach(() => {
    parser = new HandballParser();
  });

  it('should parse name', () => {
    const name = parser.makeEventName(match);
    assert.equal(name, 'p1 vs p2');
  });

  it('should parse score', () => {
    const name = parser.formatScore(match);
    assert.strictEqual(name, '33:22');
  });

  it('should throw error when score type is invalid', () => {
    const err = new Error(INVALID_SCORE_TYPE);
    assert.throws(() => parser.formatScore({ ...match, score: [] }), err);
  });
});
