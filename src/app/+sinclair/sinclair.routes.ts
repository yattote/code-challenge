import { SinclairComponent } from './sinclair.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SinclairComponent },
    //{ path: 'child-sinclair', loadChildren: './+child-sinclair#ChildSinclairModule' }
  ]},
];
