import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './sinclair.routes';
import { SinclairComponent } from './sinclair.component';

console.log('`Sinclair` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    SinclairComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SinclairModule {
  public static routes = routes;
}
