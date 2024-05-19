import {Component, OnInit} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../services/data.service";
import {FormsModule} from "@angular/forms";
import {Status} from "../enums/status.enum";
import {Priority} from "../enums/priority.enum";
import {NgForOf, NgIf} from "@angular/common";
import {ModalService} from "../services/modal.service";
import { Task } from '../models/task.model';
import {EditTaskComponent} from "../edit-task/edit-task.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  imports: [HttpClientModule, FormsModule, NgForOf, EditTaskComponent, NgIf],
  standalone: true
})
export class TodoListComponent implements OnInit {
  priority: null = null;
  status: null = null;
  dueDate: string = '';
  sortBy: string = 'id';
  direction: string = 'asc';
  data: Task[] = [];
  selectedTask: Task = {
    id: 0,
    title: '',
    description: '',
    status: '',
    priority: '',
    dueDate: ''
  };

  priorities = Object.values(Priority);
  statuses = Object.values(Status);

  constructor(private dataService: DataService, private modalService: ModalService) { }

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

  editTask(task: Task) {
    this.selectedTask = { ...task };
    this.modalService.open('editTaskModal');
  }

  saveTask(updatedTask: Task) {
    this.dataService.updateTask(updatedTask.id, updatedTask).subscribe(() => {
      this.getTasks();
      this.modalService.close('editTaskModal');
    });
  }

  cancelEdit() {
    this.modalService.close('editTaskModal');
  }

  deleteTask(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.dataService.deleteTask(id).subscribe(() => {
        this.getTasks();
      });
    }
  }
}
