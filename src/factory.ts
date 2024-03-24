import { EventParser, Match, Sport } from './types';
import {
  SoccerParser,
  VolleyballParser,
  HandballParser,
  BasketballParser,
  TennisParser,
  DefaultParser,
} from './parsers';

export class ParserFactory {
  parsers: Map<Sport, EventParser>;

  constructor() {
    this.parsers = new Map();
  }

  getParser(match: Match): EventParser {
    let parser: EventParser;
    if (this.parsers.has(match.sport)) {
      parser = this.parsers.get(match.sport) as EventParser;
    } else {
      parser = this.createParser(match);
      this.parsers.set(match.sport, parser);
    }

    return parser;
  }

  private createParser(match: Match): EventParser {
    switch (match.sport) {
      case 'soccer':
        return new SoccerParser();
      case 'volleyball':
        return new VolleyballParser();
      case 'handball':
        return new HandballParser();
      case 'basketball':
        return new BasketballParser();
      case 'tennis':
        return new TennisParser();
      default:
        return new DefaultParser();
    }
  }
}
