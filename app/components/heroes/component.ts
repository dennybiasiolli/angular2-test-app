import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

// import {Hero} from './hero';
// import {HeroService} from './service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/template.html',
    styleUrls: ['app/components/heroes/styles.css'],
    directives: [ROUTER_DIRECTIVES, RouterOutlet],
    // providers: [HeroService]
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
export class HeroesComponent {
    /*
    constructor(private _heroService: HeroService) {
        this.getHeroes();
    }
    getHeroes() {
        this.selectedHero = undefined;
        this.heroes = [];
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        return this.heroes;
    }
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes: Hero[];
    onSelect(hero: Hero) { this.selectedHero = hero; }
    */
}