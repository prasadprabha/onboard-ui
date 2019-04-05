import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MockForm } from './mock/mock-data';
import { FormData } from './interface/form-data';

@Component({
  selector: 'ngx-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.scss']
})
export class DynamicFormComponentComponent implements OnInit {
  mockForm:FormData[]=MockForm;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    const formGroup = {};
    console.log('this.mockForm',this.mockForm)
    this.mockForm.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
    console.log('this.form',this.form )
  }

}
