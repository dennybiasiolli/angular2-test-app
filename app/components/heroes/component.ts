import {Component} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/template.html',
    styleUrls: ['app/components/heroes/styles.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes = HEROES;
    onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];