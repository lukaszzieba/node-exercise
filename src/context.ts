import { ParserFactory } from './factory';
import { INVALID_SPORT, Match, Parsed } from './types';

const filterFn = ({ name, score }: Parsed) =>
  !name.includes(INVALID_SPORT) && name !== '' && score !== '';

export class ParserStrategyContext {
  private parserFactory: ParserFactory;

  constructor() {
    this.parserFactory = new ParserFactory();
  }

  parse(data: Match[]) {
    return data.map(this.execute).filter(filterFn);
  }

  private execute = (match: Match): { name: string; score: string } => {
    const parserStrategy = this.parserFactory.getParser(match);
    let name = '';
    let score = '';

    try {
      name = parserStrategy?.makeEventName(match);
      score = parserStrategy?.formatScore(match);
    } catch (e) {
      console.error('Error: ', e);
    }

    return { name, score };
  };
}
