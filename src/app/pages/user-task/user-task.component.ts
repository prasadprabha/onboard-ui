import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss']
})
export class UserTaskComponent implements OnInit {

  settings = {
    actions: false,
    columns: {
      TaskID: {
        title: 'Task ID',
        type: 'string',
      },
      TaskName: {
        title: 'Task Name',
        type: 'string',
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() { 
    const data = [];
    this.source.load(data);

  }

  ngOnInit() {
  }

}
