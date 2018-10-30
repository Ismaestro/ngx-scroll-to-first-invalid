import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {NgForm} from '@angular/forms';

@Directive({selector: '[ngxScrollToFirstInvalid]'})
export class ngxScrollToFirstInvalidDirective {
  @Input() formGroup: NgForm;

  constructor(private el: ElementRef) {
  }

  static scrollToElement(element) {
    if (element) {
      const distance = window.pageYOffset - Math.abs(element.getBoundingClientRect().y);

      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.getBoundingClientRect().top + window.scrollY - 150
      });

      setTimeout(() => {
        element.focus();
        element.blur(); // Trigger error messages
        element.focus();
      }, distance);
    }
  }

  static markFormGroupTouched(formGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        ngxScrollToFirstInvalidDirective.markFormGroupTouched(control);
      }
    });
  }

  @HostListener('submit', ['$event'])
  onSubmit(event) {
    event.preventDefault();

    if (!this.formGroup.valid) {
      ngxScrollToFirstInvalidDirective.markFormGroupTouched(this.formGroup);

      const formControlInvalid = this.el.nativeElement.querySelector('.form-control.ng-invalid');

      if (formControlInvalid) {
        return ngxScrollToFirstInvalidDirective.scrollToElement(formControlInvalid);
      } else {
        // The first element is the global form and here we are looking for the first nested form
        const formGroupInvalid = this.el.nativeElement.querySelectorAll('.form.ng-invalid');
        if (formGroupInvalid && formGroupInvalid.length) {
          return ngxScrollToFirstInvalidDirective.scrollToElement(formGroupInvalid[0]);
        }
      }

      return ngxScrollToFirstInvalidDirective.scrollToElement(this.el.nativeElement);
    }
  }
}
