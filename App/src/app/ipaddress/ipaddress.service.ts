import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { IpAddressComponent } from './ipaddress.component';


@Injectable()
export class IpAddressService {
  private serverUrl = 'http://binbash.xyz:1337/ipaddress';
  constructor(private http: Http) { }


  // public getAddresses(): Observable<IpAddressComponent[]> {
  //     return this.http.get(this.serverUrl)
  //         .map((res:Response) => res.json())
  //         .catch(this.handleError);
  // }
  
  public getAddresses(): Observable<IpAddressComponent[]> {
    return this.http.get(this.serverUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
