import {Component} from 'angular2/core';
import {HeaderComponent} from './components/core/header/component'
import {HeroesComponent} from './components/heroes/component';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls: ['app/styles.css'],
    directives: [HeaderComponent, HeroesComponent]
})
export class AppComponent {
    public title = 'Denny test app';
}