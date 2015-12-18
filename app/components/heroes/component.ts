import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// import {Hero} from './hero';
// import {HeroService} from './service';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

@Component({
    selector: 'my-heroes',
    template: `
        <h1 class="title">Component Router</h1>
        <a [routerLink]="['CrisisCenter']">Crisis Center</a>
        <a [routerLink]="['Heroes']">Heroes</a>
        <router-outlet></router-outlet>
    `,
    // templateUrl: 'app/components/heroes/template.html',
    // styleUrls: ['app/components/heroes/styles.css'],
    styles: [`
        h1 {color: #369; font-family: Arial, Helvetica, sans-serif; font-size: 250%;}
        h2 { color: #369; font-family: Arial, Helvetica, sans-serif;  }
        h3 { color: #444; font-weight: lighter; }
        body { margin: 2em; }
        body, input[text], button { color: #888; font-family: Cambria, Georgia; }
        button {padding: 0.2em; font-size: 14px}
        
        ul {list-style-type: none; margin-left: 1em; padding: 0; width: 20em;}
        
        li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        li:hover {color: #369; background-color: #EEE; left: .2em;}
        
        /* route-link anchor tags */
        a {padding: 5px; text-decoration: none; font-family: Arial, Helvetica, sans-serif; }
        a:visited, a:link {color: #444;}
        a:hover {color: white; background-color: #1171a3; }
        a.router-link-active {color: white; background-color: #52b9e9; }
        
        .selected { background-color: #EEE; color: #369; }
        
        .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
        }
    `],
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