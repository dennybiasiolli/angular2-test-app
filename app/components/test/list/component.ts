import {Component} from 'angular2/core';

@Component({
    template: `
        <h2>Parole italiane impegnative</h2>
        <ul>
            <li>Scevro</li>
            <li>Contrito</li>
            <li>Palliativo</li>
            <li>Sguaiatamente</li>
            <li>Questuante</li>
            <li>Obnubilo</li>
            <li>Avulso</li>
        </ul>
    `
})
export class TestListComponent {
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