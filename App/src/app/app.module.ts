import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {ResumeComponent} from './resume/resume.component';
import {IpAddressComponent} from './ipaddress/ipaddress.component';
import {NotFoundComponent} from './404/404.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';


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
 bootstrap: [NavbarComponent, ResumeComponent, FooterComponent]
})
export class AppModule {
}
