import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Amstrad` component loaded asynchronously');

//TODO: get data from vintage-brands.json and show it here
@Component({
  selector: 'amstrad',
  template: `
    <h1>Hello from Amstrad</h1>
    <span>
      <a [routerLink]=" ['./amstrad-detail'] ">
        Amstrad Detail
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})

export class AmstradComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Amstrad` component');
  }
}
