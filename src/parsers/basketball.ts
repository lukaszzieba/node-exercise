import { EventParser, INVALID_SCORE_TYPE, Match } from '../types';

export class BasketballParser implements EventParser {
  makeEventName(match: Match): string {
    return match.participant1 + ' - ' + match.participant2;
  }

  formatScore(match: Match): string {
    if (Array.isArray(match.score)) {
      return (
        match.score[0][0] +
        ',' +
        match.score[0][1] +
        ',' +
        match.score[1][0] +
        ',' +
        match.score[1][1]
      );
    }

    throw new Error(INVALID_SCORE_TYPE)
  }
}
