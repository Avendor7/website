import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
 // { path: '/ipaddress', component: IpAddressComponent },

  { path: 'resume', component: ResumeComponent }
//  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
