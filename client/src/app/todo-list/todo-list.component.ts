import {Component, OnInit} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../data.service";
import {FormsModule} from "@angular/forms";
import {Status} from "../enums/status.enum";
import {Priority} from "../enums/priority.enum";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  imports: [HttpClientModule, FormsModule, NgForOf],
  standalone: true
})
export class TodoListComponent implements OnInit {
  data: any;
  priority: null = null;
  status: null = null;
  dueDate: string = '';
  sortBy: string = 'id';
  direction: string = 'asc';

  priorities = Object.values(Priority);
  statuses = Object.values(Status);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    const params = {
      priority: this.priority,
      status: this.status,
      dueDate: this.dueDate,
      sortBy: this.sortBy,
      direction: this.direction,
    };

    this.dataService.getTasks(params).subscribe((response: any) => {
      this.data = response;
    });
  }

  editTask(task: any) {
    console.log('Edit task:', task);
  }

  deleteTask(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.dataService.deleteTask(id).subscribe(() => {
        this.getTasks();
      });
    }
  }
}
