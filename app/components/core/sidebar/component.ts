import {Component} from 'angular2/core';

@Component({
	selector: 'my-sidebar',
	templateUrl: 'app/components/core/sidebar/template.html'
})
export class SidebarComponent {
	public menu_items1 = MENU_ITEMS1;
	public menu_items2 = MENU_ITEMS2;
	public menu_items3 = MENU_ITEMS3;
}

interface MenuItem {
	title: string;
	link: string;
}
var MENU_ITEMS1: MenuItem[] = [
	{ title: "Menu 1 - Titolo 1", link: '/' },
	{ title: "Menu 1 - Titolo 2", link: '/' },
	{ title: "Menu 1 - Titolo 3", link: '/' }
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