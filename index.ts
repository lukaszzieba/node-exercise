import { Context } from './src/context';
import { matches } from './src/data';
import { Match } from './src/types';

class Program {
  data: Match[];
  ctx: Context;

  constructor(matches: Match[]) {
    this.data = matches;
    this.ctx = new Context();
  }

  main() {
    const parsed = this.ctx.parse(this.data);
    console.log(parsed);
  }
}

new Program(matches).main();
