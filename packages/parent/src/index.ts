import { add } from '@syngine/child';

export class App {
  public run(): number {
    console.log(`1 + 2 = ${add(1, 2)}`);
    return add(1,2);
  }
}
