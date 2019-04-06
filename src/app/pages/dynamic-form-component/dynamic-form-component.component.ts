import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormData } from './interface/form-data';
import {ApiService} from './service/api.service'

@Component({
  selector: 'ngx-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.scss']
})
export class DynamicFormComponentComponent implements OnInit {
  form: FormGroup;
  data:FormData[];
  formGroup = {};
  processDefinitions:FormData[];
  commonSelectedItem:string;
  flag:boolean = false;
  formMap:Map<String,any> = new Map<String,any>();
  submitFlag:boolean=false;

  constructor(private apiService:ApiService) { 
    this.apiService.getProcessDefinitions().subscribe((data:FormData[]) =>{
   this.processDefinitions = data;
   console.log('this.processDefinitions',this.processDefinitions)
    });
    
  }

  selectedItem(){
    console.log('commonSelectedItem',this.commonSelectedItem)
    this.apiService.getProcess(this.commonSelectedItem).subscribe((data:FormData[]) =>{
      this.data = data;
      this.flag=true;
      this.data.forEach(formControl => {
       this.formGroup[formControl.controlName] = new FormControl('');
     });
   });
  }

  submitForm(){
    console.log('Inside Submit',this.form.controls)
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);

      if (control instanceof FormControl) {
        console.log('ss',control.value);
       this.formMap.set(field,control.value)
      } 
    });
    this.formMap.set('processDefinitionId',this.commonSelectedItem);
    console.log('this.formMap',this.formMap);
    this.apiService.submitData(this.formMap).subscribe((res)=>{
      console.log("Submit Data",res);
      if(res){
        this.submitFlag=true;
      }
});
  }
  ngOnInit() {
    

    this.form = new FormGroup(this.formGroup);
    console.log('this.form',this.form )
  }

}
