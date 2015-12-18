import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// import {Hero} from './hero';
// import {HeroService} from './service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/template.html',
    styleUrls: ['app/components/heroes/styles.css'],
    directives: [ROUTER_DIRECTIVES],
    // providers: [HeroService]
})

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