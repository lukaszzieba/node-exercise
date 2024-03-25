import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { DefaultParser } from './default';
import { INVALID_SPORT, Match } from '../types';

const match = {
  sport: 'foo',
};

describe('Default parser', () => {
  let parser: DefaultParser;
  beforeEach(() => {
    parser = new DefaultParser();
  });

  it('should parse name', () => {
    const name = parser.makeEventName(match as Match);
    assert.strictEqual(name, `${INVALID_SPORT}: foo`);
  });

  it('should parse score', () => {
    const name = parser.formatScore(match as Match);
    assert.strictEqual(name, `${INVALID_SPORT}: foo`);
  });
});
