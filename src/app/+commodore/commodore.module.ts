import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './commodore.routes';
import { CommodoreComponent } from './commodore.component';

console.log('`Commodore` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    CommodoreComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CommodoreModule {
  public static routes = routes;
}
