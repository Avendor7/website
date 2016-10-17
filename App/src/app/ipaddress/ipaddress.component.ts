import { Component, OnInit } from '@angular/core';
import { Ipaddress } from './ipaddress';
import { IpAddressService } from './ipaddress.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app/ipaddress/ipaddress.html',
    providers: [IpAddressService]
})
export class IpAddressComponent implements OnInit {
    errorMessage: string;
    ipAddresses: Ipaddress[];
    mode = 'Observable';

    constructor(private ipAddressService: IpAddressService) {

    }
    public ngOnInit() {

        // this.ipAddressService.getAddresses().subscribe(data => console.log(data));
        this.ipAddressService.getAddresses()
            .subscribe(
                ipAddresses => this.ipAddresses = ipAddresses,
                error =>  this.errorMessage = <any>error);

        console.log(this.ipAddresses);

    }
}
