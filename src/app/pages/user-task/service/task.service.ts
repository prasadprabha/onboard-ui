import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}

  public getProcess(roles:string[]){
    return this.httpClient.get('http://localhost:8888/onboard/get-task-for-group/?groupId='+roles);
}
}