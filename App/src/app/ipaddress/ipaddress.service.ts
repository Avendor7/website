import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IpAddressComponent } from './ipaddress.component';


@Injectable()
export class IpAddressService {
    private serverUrl = 'http://binbash.xyz/ipaddress'
    constructor(private http: Http) { }


    getAddresses(): Promise<IpAddressComponent[]>{

        return this.http.get(this.serverUrl)
            .toPromise()
            .then(response => response.json().data as IpAddressComponent[]);

    }

}
