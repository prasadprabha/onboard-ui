// Create this file under app/shared/mock/mock-data.ts

import { FormData } from './../interface/form-data';

export const MockForm: FormData[] = [
  {
    controlName: 'Username',
    controlType: 'text'
  },
  {
    controlName: 'Telephone',
    controlType: 'text',
    },
    {
      controlName: 'Email',
      controlType: 'text',
    },
    {
      controlName: 'Gender',
      controlType: 'select',
      options: [{
        optionName: 'Male',
        value: 'male'
      }, {
        optionName: 'Female',
        value: 'female'
      }]
    },
    {
      controlName: 'Vehicle you own',
      controlType: 'radio',
      options: [{
        optionName: 'I have a bike',
        value: 'bike'
      }, {
        optionName: 'I have a car',
        value: 'car'
      }]
    }
    ];