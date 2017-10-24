/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'code-challenge',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./foo'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Foo
      </a>
      <a [routerLink]=" ['./bar'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Bar
      </a>
      <a [routerLink]=" ['./sinclair'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Sinclair
      </a>
      <a [routerLink]=" ['./commodore'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Commodore
      </a>
      <a [routerLink]=" ['./amstrad'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Amstrad
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>Powered by <a [href]="url">Angular2</a></span>
    </footer>
  `
})

export class AppComponent implements OnInit {
  public name = 'Angular 2 code challenge';
  public url = 'https://angular.io/';

  constructor(private appState: AppState) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
