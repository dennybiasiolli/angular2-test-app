import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TestListComponent} from './list/component';

@Component({
    selector: 'my-test',
    templateUrl: 'app/components/test/template.html',
    styleUrls: ['app/components/test/styles.css'],
    directives: [RouterOutlet],
})
@RouteConfig([
    { path: '/', name: 'Test', component: TestListComponent, useAsDefault: true },
])
export class TestComponent { }