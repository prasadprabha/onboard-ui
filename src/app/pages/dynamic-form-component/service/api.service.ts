import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormData } from './../interface/form-data';
import { merge, Observable, of as observableOf, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}

  public getProcess(commonSelectedItem:string){
    return this.httpClient.get<FormData[]>('http://localhost:8888/onboard/form-fields/?processDefinitionId='+commonSelectedItem);
}
public getProcessDefinitions(){
    return this.httpClient.get<FormData[]>(`http://localhost:8888/onboard/get-process-definitions`);
}

public submitData(formMap: Map<String,any>) {
  console.log(formMap);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    const convMap = {};
    formMap.forEach((val: string, key: string) => {
      convMap[key] = val;
    });
   
    return this.httpClient.post('http://localhost:8888/onboard/start-process-form', convMap);

  }
}