import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'under-construction',
  styles: [`
  `],
  template: `
    <br><br>
    <div>
      <img [src]="underConstructionLogo" width="25%">
    </div>
    <hr>
  `
})

export class UnderConstructionComponent implements OnInit {
  public underConstructionLogo = 'assets/img/under-construction.png';

  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    console.log('hello `UnderConstruction` component');
  }
}
