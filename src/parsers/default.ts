import { EventParser, INVALID_SPORT, Match } from '../types';

export class DefaultParser implements EventParser {
  makeEventName(match: Match): string {
    return `${INVALID_SPORT}: ${match.sport}`;
  }

  formatScore(match: Match): string {
    return `${INVALID_SPORT}: ${match.sport}`;
  }
}
