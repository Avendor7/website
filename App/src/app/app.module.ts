import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {ResumeComponent} from './resume/resume.component';
import {IpAddressComponent} from './ipAddress/ipaddress.component';

@NgModule({
 declarations: [
 AppComponent,
 ResumeComponent,
 IpAddressComponent
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
