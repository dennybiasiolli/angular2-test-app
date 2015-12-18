import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './components/core/header/component';
import {SidebarComponent} from './components/core/sidebar/component';
import {HeroesComponent} from './components/heroes/component';
import {TestComponent} from './components/test/component';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls: ['app/styles.css'],
    directives: [HeaderComponent, SidebarComponent, HeroesComponent, TestComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/heroes/...', name: 'Heroes', component: HeroesComponent, useAsDefault: true },
    { path: '/test/...', name: 'Test', component: TestComponent },
])

export class AppComponent {
    public title = 'Denny test app';
}