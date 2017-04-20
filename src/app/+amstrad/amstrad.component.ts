import {
  Component,
  OnInit,
} from '@angular/core';
import { BrandService } from '../app.service';
import { BrandItemsService } from '../app.service';
import { Brand } from '../app.service';
import { BrandItem } from '../app.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Amstrad` component loaded asynchronously');

//TODO: get data from vintage-brands.json and show it here
@Component({
  selector: 'amstrad',
   providers: [
    BrandService,
    BrandItemsService
  ],
  template: `
    <h1>List of models for {{brand.name}}</h1>
    <div>
        <img src={{brand.logo}}>
        <h3>{{brand.desc}}</h3>
    </div>
    <hr>
    <div>
      <h3>List of models</h3>
      <ul>
        <li *ngFor="let item of brandItems;">
          {{item.name}}
        </li>
      </ul>
    </div>
    <hr>
  `,
})

export class AmstradComponent implements OnInit {
  public brand : Brand;
  public brandItems : BrandItem[];

  constructor(private brandService : BrandService,
              private brandItemsService : BrandItemsService) {
    this.brand = brandService.getBrand('3');
    this.brandItems = brandItemsService.getBrandItems('3');
  }

  public ngOnInit() {    
    console.log('`Amstrad` brand', this.brand);
    console.log('`Amstrad` brand items ', this.brandItems);
  }
}
