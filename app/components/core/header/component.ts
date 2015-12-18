import {Component} from 'angular2/core';

@Component({
	selector: 'my-header',
	templateUrl: 'app/components/core/header/template.html',
	styleUrls:['app/components/core/header/styles.css'],
	inputs: ['title']
})
export class HeaderComponent {
	public title: string;
}