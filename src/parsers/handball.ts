import { EventParser, INVALID_SCORE_TYPE, Match, isString } from '../types';

export class HandballParser implements EventParser {
  makeEventName(match: Match): string {
    return match.participant1 + ' vs ' + match.participant2;
  }

  formatScore(match: Match): string {
    if (isString(match.score)) {
      return match.score;
    }

    throw new Error(INVALID_SCORE_TYPE);
  }
}
