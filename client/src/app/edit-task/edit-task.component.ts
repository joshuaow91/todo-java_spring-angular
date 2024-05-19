import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import {FormsModule} from "@angular/forms";
import {Status} from "../enums/status.enum";
import {Priority} from "../enums/priority.enum";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ]
})
export class EditTaskComponent {
  @Input() task: Task = {
    id: 0,
    title: '',
    description: '',
    status: '',
    priority: '',
    dueDate: ''
  };
  @Output() save = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  priorityOptions = Object.values(Priority);
  statusOptions = Object.values(Status);

  onSave() {
    this.save.emit(this.task);
  }

  onCancel() {
    this.cancel.emit();
  }
}
