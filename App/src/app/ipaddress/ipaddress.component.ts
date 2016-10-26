import { Component, OnInit } from '@angular/core';
//import { Ipaddress } from './ipaddress';
import { IpAddressService } from './ipaddress.service';
import {ModalModule} from "ng2-modal";

@Component({
    selector: 'my-app',
    templateUrl: '/app/ipaddress/ipaddress.html',
    providers: [IpAddressService]
})
export class IpAddressComponent implements OnInit {
    public errorMessage: string;
    public ipAddresses:  any;

    constructor(private ipAddressService: IpAddressService) {
        
    }
    public ngOnInit() {

        this.ipAddressService.getAddresses()
            .subscribe(
                ipAddresses => this.ipAddresses = ipAddresses,
                error =>  this.errorMessage = <any>error);

        

    }
}
