import { EventParser, INVALID_SCORE_TYPE, Match, isString } from '../types';

export class TennisParser implements EventParser {
  makeEventName(match: Match): string {
    return match.participant1 + ' vs ' + match.participant2;
  }

  formatScore(match: Match): string {
    if (isString(match.score)) {
      const scores = /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(
        match.score,
      );
      if (scores) {
        const set1 = scores[2];
        const set2 = scores[3];
        const set3 = scores[4];

        return (
          'Main score: ' +
          scores[1] +
          ' (' +
          'set1 ' +
          set1 +
          ', ' +
          'set2 ' +
          set2 +
          ', ' +
          'set3 ' +
          set3 +
          ')'
        );
      }
    }

    throw new Error(INVALID_SCORE_TYPE);
  }
}
