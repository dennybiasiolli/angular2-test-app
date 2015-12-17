import {Component} from 'angular2/core';

@Component({
	selector: 'my-header',
	templateUrl: 'app/components/core/header/template.html',
	inputs: ['title']
})
export class HeaderComponent {
	public title: string;
}