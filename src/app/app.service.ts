import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';

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

export class Brand {
id:string;
name:string;
logo:string;
desc:string;
}

export class BrandItem {
id:string;
idbrand:string;
name:string;
}

@Injectable()
export class BrandService {
  private _brandsurl='assets/vintage-brands.json';

  constructor(private http:Http) { }

  getBrands() : Observable<Brand[]> {
    return this.http.get(this._brandsurl)
                    .map((res:Response) => <Brand[]> res.json())
                    .do(data => console.log(JSON.stringify(data)));
                    // .catch(this.handleError);
  }

  // private handleError (error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}

@Injectable()
export class BrandItemsService {
  private _brandItemsurl='assets/vintage-items.json';

  constructor(private http:Http) { }

  getBrandItems() : Observable<BrandItem[]> {
    return this.http.get(this._brandItemsurl)
                    .map((res:Response) => <BrandItem[]> res.json())
                    .do(data => console.log(JSON.stringify(data)));
                    // .catch(this.handleError);
  }

  // private handleError (error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}