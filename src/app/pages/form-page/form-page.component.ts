import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl({value: "John", disabled: true}, [Validators.required]),
    })
  }

  disableCVA() {
    this.form.get('name')?.disable()
  }
  enableCVA() {
    this.form.get('name')?.enable()
  }

}
