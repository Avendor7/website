import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { IpAddressComponent } from './ipaddress/ipaddress.component';
import { NotFoundComponent } from './404/404.component';


const appRoutes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'ipaddress', component: IpAddressComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
