import { add } from '@syngine/child';

export class App {
  public run(): void {
    console.log(`1 + 2 = ${add(1, 2)}`);
  }
}
