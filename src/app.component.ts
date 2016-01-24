import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{'My First Angular 2 App' | lowercase}}</h1>
		<input (keyup)="onKeyup($event)">
		<p>{{viewText}}</p>
	`
})
export class AppComponent {
	viewText = '';

	onKeyup($event) {
		this.viewText = $event.target.value;
	}
}
