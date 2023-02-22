import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({ selector: '[ngxScrollToFirstInvalid]' })
export class NgxScrollToFirstInvalidDirective {
  @Input() formGroup: FormGroup | null = null;

  constructor(private el: ElementRef) {}

  static scrollToElement(element: HTMLElement) {
    if (element) {
      const distance = window.pageYOffset - Math.abs(element.getBoundingClientRect().y);

      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.getBoundingClientRect().top + window.scrollY - 150,
      });

      setTimeout(() => {
        element.focus();
        element.blur(); // Trigger error messages
        element.focus();
      }, distance);
    }
  }

  static markFormGroupTouched(formGroup: FormGroup | null) {
    (<any>Object).values(formGroup?.controls).forEach((control: FormGroup) => {
      control.markAsTouched();

      if (control.controls) {
        NgxScrollToFirstInvalidDirective.markFormGroupTouched(control);
      }
    });
  }

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.formGroup?.valid) {
      NgxScrollToFirstInvalidDirective.markFormGroupTouched(this.formGroup);

      const formControlInvalid = this.el.nativeElement.querySelector('.ng-invalid');

      if (formControlInvalid) {
        return NgxScrollToFirstInvalidDirective.scrollToElement(formControlInvalid);
      } else {
        // The first element is the global form and here we are looking for the first nested form
        const formGroupInvalid = this.el.nativeElement.querySelectorAll('form .ng-invalid');
        if (formGroupInvalid && formGroupInvalid.length) {
          return NgxScrollToFirstInvalidDirective.scrollToElement(formGroupInvalid[0]);
        }
      }

      return NgxScrollToFirstInvalidDirective.scrollToElement(this.el.nativeElement);
    }
  }
}
