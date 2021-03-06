import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = new Model();

  title = 'ToDo';

  getName() {
    return this.model.user;
  }
}
