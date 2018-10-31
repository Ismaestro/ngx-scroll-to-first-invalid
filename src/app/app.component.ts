import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  shopForm: FormGroup;
  formValidAndSubmitted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.shopForm = formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', AppComponent.emailValidator],
      'address': ['', Validators.required],
      'address2': [''],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'zip': ['', Validators.required]
    });
  }

  static emailValidator(control: any) {
    // RFC 2822 compliant regex
    if (control.value) {
      /* tslint:disable */
      if (control.value.match(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)) {
        /* tslint:enable */
        return null;
      } else {
        return {'invalidEmailAddress': true};
      }

    }
  }

  submit() {
    if (this.shopForm.valid) {
      this.formValidAndSubmitted = true;
    }
  }
}
