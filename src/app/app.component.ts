import { Component, VERSION, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Angular ' + VERSION.major;

  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      id: 'textid',
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: 'First Name',
      required: true
    },
    {
      type: 'date',
      name: 'birthDate',
      label: 'Birth date',
      value: '2020-02-15',
      required: true
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [{ key: 'in', label: 'India' }, { key: 'us', label: 'USA' }]
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: 'in',
      required: true,
      options: [{ key: 'm', label: 'Male' }, { key: 'f', label: 'Female' }]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [{ key: 'f', label: 'Fishing' }, { key: 'c', label: 'Cooking' }]
    }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }
  ngOnInit()
  {
    this.form = new FormGroup({});
    this.fields.forEach(x => {
      if (x.type == 'checkbox') {
        this.form.addControl(x.name, new FormGroup({}));
        x.options.forEach(o => {
          (this.form.get(x.name) as FormGroup).addControl(
            o.key,
            new FormControl(false)
          );
        });
      } else {
        this.form.addControl(
          x.name,
          new FormControl(
            x.value || '',
            x.required ? Validators.required : null
          )
        );
      }
    });
  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }

  onSubmited(event){
    console.log("Event Output Form data:  ", this.form.value);
    alert(JSON.stringify(this.form.value));
  }

}
