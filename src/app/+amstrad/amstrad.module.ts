import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './amstrad.routes';
import { AmstradComponent } from './amstrad.component';

console.log('`Amstrad` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AmstradComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AmstradModule {
  public static routes = routes;
}
