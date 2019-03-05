import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Mars', content: 'This is our development server'},
    {type: 'blueprint', name: 'Jupiter', content: 'This is test server'}];

}
