import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Sinclair` component loaded asynchronously');

//TODO: get data from vintage-brands.json and show it here
@Component({
  selector: 'sinclair',
  template: `
    <h1>Hello from Sinclair</h1>
    <span>
      <a>
        List games Sinclair
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})

export class SinclairComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Sinclair` component');
  }
}
