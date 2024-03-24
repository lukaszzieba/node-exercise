import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { SoccerParser } from './soccer';
import { INVALID_SCORE_TYPE, Match } from '../types';

const match: Match = {
  sport: 'soccer',
  participant1: 'p1',
  participant2: 'p2',
  score: '2:1',
};

describe('Soccer parser', () => {
  let parser: SoccerParser;
  beforeEach(() => {
    parser = new SoccerParser();
  });

  it('should parse name', () => {
    const name = parser.makeEventName(match);
    assert.equal(name, 'p1 - p2');
  });

  it('should parse score', () => {
    const name = parser.formatScore(match);
    assert.equal(name, '2:1');
  });

  it('should throw error when score type is invalid', () => {
    const err = new Error(INVALID_SCORE_TYPE);
    assert.throws(() => parser.formatScore({ ...match, score: [] }), err);
  });
});
