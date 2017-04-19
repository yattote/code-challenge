import { AmstradComponent } from './amstrad.component';

export const routes = [
  { path: '', children: [
    { path: '', component: AmstradComponent },
    //{ path: 'child-amstrad', loadChildren: './+child-amstrad#ChildAmstradModule' }
  ]},
];
