import { Component } from '@angular/core';
import { IpAddressService } from './ipaddress.service'

@Component({
    selector: 'my-app',
    templateUrl: '/app/ipaddress/ipaddress.html',
    providers: [IpAddressService]
})
export class IpAddressComponent {

    constructor(private ipAddressService: IpAddressService) {

    }
}