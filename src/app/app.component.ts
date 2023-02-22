import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  shopForm: FormGroup;
  formValidAndSubmitted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.formValidAndSubmitted = false;
    this.shopForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', AppComponent.emailValidator],
      address: ['', Validators.required],
      address2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  static emailValidator(control: FormControl) {
    // RFC 2822 compliant regex
    if (control.value) {
      /* eslint:disable */
      if (
        control.value.match(
          // eslint-disable-next-line security/detect-unsafe-regex
          /[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?\.)+[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?/
        )
      ) {
        /* eslint:enable */
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }
    return null;
  }

  submit() {
    if (this.shopForm.valid) {
      this.formValidAndSubmitted = true;
    }
  }
}
