export type Sport = 'soccer' | 'volleyball' | 'handball' | 'basketball' | 'tennis';

export interface Match {
  sport: Sport;
  participant1: string;
  participant2: string;
  score: string | string[][];
}

export interface EventParser {
  makeEventName(march: Match): string;
  formatScore(match: Match): string;
}

export interface Parsed {
  name: string;
  score: string;
}

export const INVALID_SPORT = 'Invalid sport';
export const INVALID_SCORE_TYPE = 'Invalid score type';

export const isString = (value: any): value is string => typeof value === 'string';
