import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { ParserFactory } from './factory';
import { Match } from './types';
import {
  BasketballParser,
  DefaultParser,
  HandballParser,
  SoccerParser,
  TennisParser,
  VolleyballParser,
} from './parsers';

describe('Parser factory', () => {
  let factory: ParserFactory;

  beforeEach(() => {
    factory = new ParserFactory();
  });

  it('should create volleyball parser', () => {
    const parser = factory.getParser({ sport: 'volleyball' } as Match);
    assert.ok(parser instanceof VolleyballParser);
  });

  it('should create tennis parser', () => {
    const parser = factory.getParser({ sport: 'tennis' } as Match);
    assert.ok(parser instanceof TennisParser);
  });

  it('should create soccer parser', () => {
    const parser = factory.getParser({ sport: 'soccer' } as Match);
    assert.ok(parser instanceof SoccerParser);
  });

  it('should create handball parser', () => {
    const parser = factory.getParser({ sport: 'handball' } as Match);
    assert.ok(parser instanceof HandballParser);
  });

  it('should create basketball parser', () => {
    const parser = factory.getParser({ sport: 'basketball' } as Match);
    assert.ok(parser instanceof BasketballParser);
  });

  it('should create default parser', () => {
    const parser = factory.getParser({ sport: 'ski jumping' } as any);
    assert.ok(parser instanceof DefaultParser);
  });

  it('should not create new volleyball parser', () => {
    const parser = factory.getParser({ sport: 'volleyball' } as Match);
    const paeser2 = factory.getParser({ sport: 'volleyball' } as Match);

    assert.strictEqual(parser, paeser2);
  });
});
