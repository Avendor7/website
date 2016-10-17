import { Component, OnInit } from '@angular/core';
import { IpAddressService } from './ipaddress.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app/ipaddress/ipaddress.html',
    providers: [IpAddressService]
})
export class IpAddressComponent implements OnInit {

    public ipAddresses: any;

    constructor(private ipAddressService: IpAddressService) {

    }
    public ngOnInit() {

        // this.ipAddressService.getAddresses().subscribe(data => this.ipAddresses);
        this.ipAddressService.getAddresses().subscribe(data => this.ipAddresses);

        console.log(this.ipAddresses);

    }
}
