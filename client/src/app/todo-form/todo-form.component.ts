import {Component, OnInit} from "@angular/core";
import {DataService} from "../data.service";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  standalone: true,
})

export class TodoFormComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.postData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

}
