import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'my-sidebar',
	templateUrl: 'app/components/core/sidebar/template.html',
	styleUrls: ['app/components/core/sidebar/styles.css'],
	directives: [ROUTER_DIRECTIVES]
})
export class SidebarComponent {
	selectedMenuItem = undefined;

	public menu_items1 = MENU_ITEMS1;
	public menu_items2 = MENU_ITEMS2;
	public menu_items3 = MENU_ITEMS3;

	onSelect(m: MenuItem) {
		selectedMenuItem = m
	}
}

interface MenuItem {
	title: string;
	link: string;
}
var MENU_ITEMS1: MenuItem[] = [
	{ title: "Heroes", link: 'Heroes' },
	{ title: "Test", link: 'Test' }
];
var MENU_ITEMS2: MenuItem[] = [
	{ title: "Menu 2 - Titolo 1", link: '/' },
	{ title: "Menu 2 - Titolo 2", link: '/' },
	{ title: "Menu 2 - Titolo 3", link: '/' }
];
var MENU_ITEMS3: MenuItem[] = [
	{ title: "Menu 3 - Titolo 1", link: '/' },
	{ title: "Menu 3 - Titolo 2", link: '/' },
	{ title: "Menu 3 - Titolo 3", link: '/' }
];