import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.testForm = this.formBuilder.group({
      someText1: ['', [Validators.required]],
      someText2: ['', [Validators.required]],
      someText3: ['', [Validators.required]],
      someText4: ['', [Validators.required]],
      someText5: ['', [Validators.required]],
      someText6: ['', [Validators.required]],
      someText7: ['', [Validators.required]],
      someText8: ['', [Validators.required]],
      someText9: ['', [Validators.required]],
      someText10: ['', [Validators.required]],
      nestedGroup: this.formBuilder.group({
        someText11: [''],
      }, {validator: [this.alwaysFalse]})
    });
  }

  alwaysFalse() {
    return {'asdfsaf': true};
  }

  saveForm() {
  }
}
