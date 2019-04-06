import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbTokenService , NbAuthJWTToken} from '@nebular/auth';
import {Injectable} from '@angular/core';
import { User } from '../../Models/User';
import {TaskService} from './service/task.service'

@Component({
  selector: 'ngx-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss']
})
export class UserTaskComponent implements OnInit {

  settings = {
    actions: false,
    columns: {
      id: {
        title: 'Task ID',
        type: 'string',
      },
      name: {
        title: 'Task Name',
        type: 'string',
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data = [];

  constructor(private tokenService: NbTokenService,private taskService:TaskService) {
    this.tokenService.get().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
           let user : User = token.getPayload();
           console.log(user.roles)
           let roles = user.roles
           this.taskService.getProcess(roles).subscribe((res:any[])=>{
            this.data = res;
            console.log(res);
            this.source.load(this.data);
           });
      }
   });
    

  }

  ngOnInit() {
  }

}
