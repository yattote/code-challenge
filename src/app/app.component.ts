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
  selector: 'app',
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

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
