import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {EditTaskComponent} from "./edit-task/edit-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, TodoFormComponent, EditTaskComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'client';
}
