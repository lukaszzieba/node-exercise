import { ParserStrategyContext } from './src/context';
import { matches } from './src/data';

class Program {
  ctx: ParserStrategyContext;

  constructor() {
    this.ctx = new ParserStrategyContext();
  }

  main() {
    const parsed = this.ctx.parse(matches);
    console.log(parsed);
  }
}

new Program().main();
