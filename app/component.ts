import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from './components/core/header/component';
import {SidebarComponent} from './components/core/sidebar/component';
import {HeroesComponent} from './components/heroes/component';

import {CrisisCenterComponent} from './components/heroes/crisis-center/crisis-center.component';
import {HeroListComponent}     from './components/heroes/heroes/hero-list.component';
import {HeroDetailComponent}   from './components/heroes/heroes/hero-detail.component';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls: ['app/styles.css'],
    directives: [HeaderComponent, SidebarComponent, HeroesComponent]
})

@RouteConfig([
    { // Crisis Center child route
        path: '/crisis-center/...',
        name: 'CrisisCenter',
        component: CrisisCenterComponent,
        useAsDefault: true
    },

    { path: '/heroes', name: 'Heroes', component: HeroListComponent },
    { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent },
    { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }
])
export class AppComponent {
    public title = 'Denny test app';
}