import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './component';
import {DialogService} from './components/heroes/dialog.service';
import {HeroService} from  './components/heroes/heroes/hero.service';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	DialogService,
	HeroService
]);
