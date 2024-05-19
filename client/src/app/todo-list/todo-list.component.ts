import {Component, OnInit} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  imports: [HttpClientModule],
  standalone: true
})
export class TodoListComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}
