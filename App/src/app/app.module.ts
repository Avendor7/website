import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing, appRoutingProviders} from './app.routing';
import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {IpAddressComponent} from './ipaddress/ipaddress.component';
import {NotFoundComponent} from './404/404.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {AppComponent} from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        ResumeComponent,
        IpAddressComponent,
        NotFoundComponent,
        FooterComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
