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

@Component({
  selector: 'amstrad',
   providers: [
    BrandService,
    BrandItemsService
  ],
  template: `
    <h1>List of models for {{brand?.name}} </h1>
    <div>
         <img src={{brand?.logo}}>
         <h3>{{brand?.desc}}</h3>
    </div>
    <hr>
    <div>
      <h3>List of models</h3>
      <ul>
        <li *ngFor="let item of brandItems">
            {{item.name}}
        </li>
      </ul>
    </div>
    <hr>
  `,
})
  
export class AmstradComponent implements OnInit {
  errorBrands: string;
  errorBrandItems: string;
  brand : Brand;
  brands : Brand[];
  brandItems : BrandItem[];

  constructor(private brandService : BrandService,
              private brandItemsService : BrandItemsService) {
  }

  public ngOnInit() {
    this.getBrands();
    this.getBrandItems();
    console.log('`Amstrad` brand', this.brands);
    console.log('`Amstrad` brand items ', this.brandItems);
  }

  private getBrands() {
    this.brandService.getBrands()
        .subscribe( brands => {
                        this.brands = brands.filter(item => item.id == '3');
                        console.log('this.brands.length=' + this.brands.length);
                        console.log('this.brands[0]=' + this.brands[0]);
                        console.log('this.brands[0].desc=' + this.brands[0].desc);
                        this.brand = this.brands[0];
                    },
                    error =>  this.errorBrands = <any>error);
  }
  
  private getBrandItems() {
    this.brandItemsService.getBrandItems()
        .subscribe( brandItems => {
                        this.brandItems = brandItems.filter(item => item.idbrand == '3');
                        console.log('this.brandItems.length=' + this.brandItems.length);
                        console.log('this.brandItems[0]=' + this.brandItems[0]);
                        console.log('this.brandItems[0].name=' + this.brandItems[0].name);
                    },
                    error =>  this.errorBrandItems = <any>error);
  }
}
