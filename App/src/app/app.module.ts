import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { IpAddressComponent } from './ipaddress/ipaddress.component';
import { NotFoundComponent } from './404/404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


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
        HttpModule,
        routing,
        ModalModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
