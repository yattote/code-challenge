import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  // already return a clone of the current state
  public get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}

export class Brand{
id:string;
name:string;
logo:string;
desc:string;
}

export class BrandItem{
id:string;
idbrand:string;
name:string;
}

@Injectable()
export class BrandService {
  constructor() {
  }

  getBrand(id : string) {
    let brands:Brand[] = this.getBrands();
    
    return brands.filter(item => item.id == id)[0];

    // return this.http.get('assets/vintage-brands.json')
    //                   .map((res:Response) => res.json().Brand)
    //                   .filter(data => data.id == id)[0];
  }

  getBrands() {
    //TODO: to read from .json file instead of importing its content
    let brands:any = JSON.parse('[{"id":"1","name":"Sinclair Research","logo":"assets/logo-sinclair.jpg","desc":"Clive Marles Sinclair (Londres, 30 de julio de 1940) es un ingeniero, inventor y empresario británico. Es el creador del popular ZX Spectrum, un microordenador doméstico de los años 1980"},{"id":"2","name":"Commodore International","logo":"assets/logo-commodore.jpg","desc":"Fue una compañía estadounidense de electrónica y hardware con sede en West Chester"},{"id":"3","name":"Amstrad","logo":"assets/logo-amstrad.png","desc":"Amstrad es un fabricante de electrónica con base en Brentwood, Essex, Inglaterra, "}]');
    let brandsObj:Brand[] = <Brand[]> brands;

    console.log('Brands from json file:', brands);
    brandsObj.forEach(item => {
      console.log('Parsed Brands from json file:', item);
    });
    
    return brandsObj;
  }
}

@Injectable()
export class BrandItemsService {
  constructor() {
  }

  getBrandItems(brandId : string) {
      let brandItems:BrandItem[] = this.getAllBrandItems();
    
    return brandItems.filter(item => item.idbrand == brandId);

  //   return this.http.get('assets/vintage-items.json')
  //                     .map((res:Response) => res.json().BrandItems)
  //                     .filter(data => data.id == id);
  }

  getAllBrandItems() {
   //TODO: to read from .json file instead of importing its content
    let brandItems:any = JSON.parse('[{"id":"1","idbrand":"1","name":"ZX 80"},{"id":"2","idbrand":"1","name":"ZX Spectrum"},{"id":"3","idbrand":"2","name":"Commodore VIC-20"},{"id":"4","idbrand":"2","name":"Commodore 64"},{"id":"5","idbrand":"2","name":"Commodore Amiga"},{"id":"6","idbrand":"3","name":"CPC 464"},{"id":"7","idbrand":"3","name":"CPC6128"}]');
    let brandItemsObj:BrandItem[] = <BrandItem[]> brandItems;

    console.log('Brand items from json file:', brandItems);
    brandItemsObj.forEach(item => {
      console.log('Parsed Brand items from json file:', item);
    });
    
    return brandItemsObj;
  }
}