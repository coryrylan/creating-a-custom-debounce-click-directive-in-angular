import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DebounceClickDirective } from './debounce-click.directive';

@Component({
  selector: 'app-root',
  imports: [DebounceClickDirective],
  template: `
    <h1>Creating a Custom Debounce Click Directive in Angular</h1>

    <a href="https://coryrylan.com/blog/creating-a-custom-debounce-click-directive-in-angular">Tutorial at coryrylan.com</a>

    {{count}}

    <br />

    <button (click)="log()">Regular Click</button>
    &nbsp;
    <button appDebounceClick (debounceClick)="log()" [debounceTime]="700">Debounced Click</button>

  `,
})
export class App {
  count = 0;

  log() {
    this.count++;
    console.log('Clicked!');
  }
}

bootstrapApplication(App);
