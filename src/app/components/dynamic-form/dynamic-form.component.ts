import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MockForm } from './mock/mock-data';
import { FormData } from './interface/form-data';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  MockForm: FormData[];
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    const formGroup = {};
    this.MockForm.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

}
