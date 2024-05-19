import {Component} from "@angular/core";
import {DataService} from "../services/data.service";
import {FormsModule, NgForm} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {Priority} from "../enums/priority.enum";
import {Status} from "../enums/status.enum";


@Component({
  selector: "app-todo-form",
  standalone: true,
  templateUrl: "./todo-form.component.html",
  imports: [FormsModule, CommonModule],
})

export class TodoFormComponent {
  title = '';
  description = '';
  dueDate = '';
  status: Status = Status.PENDING;
  priority: Priority = Priority.MEDIUM;

  statuses = Object.values(Status);
  priorities = Object.values(Priority);

  constructor(private dataService: DataService) {}

  onSubmit(taskForm: NgForm) {
    const formData = {
      title: taskForm.value.title,
      description: taskForm.value.description,
      dueDate: taskForm.value.dueDate,
      status: taskForm.value.status,
      priority: taskForm.value.priority
    };

    this.dataService.postData(formData).subscribe({
      next: (response) => {
        console.log('Task created successfully', response);
        this.resetForm(taskForm);
      },
      error: (error) => {
        console.error('Error creating task', error);
      }
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }

}
