import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/resume" routerLinkActive="active">resume</a>
    <a routerLink="/" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
}
