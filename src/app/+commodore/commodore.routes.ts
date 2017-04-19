import { CommodoreComponent } from './commodore.component';

export const routes = [
  { path: '', children: [
    { path: '', component: CommodoreComponent },
    //{ path: 'child-commodore', loadChildren: './+child-commodore#ChildCommodoreModule' }
  ]},
];
