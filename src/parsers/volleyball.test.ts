import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { VolleyballParser } from './volleyball';
import { INVALID_SCORE_TYPE, Match } from '../types';

const match: Match = {
  sport: 'volleyball',
  participant1: 'p1',
  participant2: 'p2',
  score: '3:0,25:23,25:19,25:21',
};

describe('Volleyball parser', () => {
  let parser: VolleyballParser;
  beforeEach(() => {
    parser = new VolleyballParser();
  });

  it('should parse name', () => {
    const name = parser.makeEventName(match);
    assert.equal(name, 'p1 - p2');
  });

  it('should parse score', () => {
    const name = parser.formatScore(match);
    assert.strictEqual(name, 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)');
  });

  it('should throw error when score type is invalid', () => {
    const err = new Error(INVALID_SCORE_TYPE);
    assert.throws(() => parser.formatScore({ ...match, score: [] }), err);
  });
});
