import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { HomeComponent } from './home';
import { UnderConstructionComponent } from './under-construction';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'foo', component: UnderConstructionComponent },
  { path: 'bar', component: UnderConstructionComponent },
  { path: 'sinclair', loadChildren: './+sinclair#SinclairModule'},
  { path: 'commodore', loadChildren: './+commodore#CommodoreModule'},
  { path: 'amstrad', loadChildren: './+amstrad#AmstradModule'},
  { path: '**',    component: NoContentComponent },
];
