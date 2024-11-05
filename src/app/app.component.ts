import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { NgxScrollToFirstInvalidDirective } from '../../projects/ngx-scroll-to-first-invalid-lib/src/lib/ngx-scroll-to-first-invalid.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent, NgxScrollToFirstInvalidDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  formValidAndSubmitted = false;
  shopForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    address2: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
  });

  submit() {
    if (this.shopForm.valid) {
      this.formValidAndSubmitted = true;
    }
  }
}
