import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { TennisParser } from './tennis';
import { Match } from '../types';

const match: Match = {
  sport: 'tennis',
  participant1: 'p1',
  participant2: 'p2',
  score: '2:1,7:6,6:3,6:7',
};

describe('Tennis parser', () => {
  let parser: TennisParser;
  beforeEach(() => {
    parser = new TennisParser();
  });

  it('should parse name', () => {
    const name = parser.makeEventName(match);
    assert.equal(name, 'p1 vs p2');
  });

  it('should parse score', () => {
    const name = parser.formatScore(match);
    assert.strictEqual(name, 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)');
  });
});
