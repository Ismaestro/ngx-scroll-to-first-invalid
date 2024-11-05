import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Directive({ standalone: true, selector: '[ngxScrollToFirstInvalid]' })
export class NgxScrollToFirstInvalidDirective {
  @Input() formGroup: FormGroup | null = null;
  @Input() ionContent: IonContent | null = null;

  constructor(private el: ElementRef) {}

  static scrollToElement(element: HTMLElement, ionContent: IonContent | null) {
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 150;

      if (ionContent) {
        ionContent.scrollToPoint(0, offset, 1000);
      } else {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: offset,
        });
      }

      setTimeout(() => {
        element.focus();
        element.blur(); // Trigger error messages
        element.focus();
      }, 500);
    }
  }

  static markFormGroupTouched(formGroup: FormGroup | null) {
    if (formGroup) {
      Object.values(formGroup.controls).forEach((control: AbstractControl) => {
        control.markAsTouched();

        if (control instanceof FormGroup) {
          NgxScrollToFirstInvalidDirective.markFormGroupTouched(control);
        }
      });
    }
  }

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    event.preventDefault();

    if (this.formGroup && !this.formGroup.valid) {
      NgxScrollToFirstInvalidDirective.markFormGroupTouched(this.formGroup);

      const formControlInvalid = this.el.nativeElement.querySelector('.ng-invalid');

      if (formControlInvalid) {
        return NgxScrollToFirstInvalidDirective.scrollToElement(
          formControlInvalid,
          this.ionContent
        );
      } else {
        const formGroupInvalid = this.el.nativeElement.querySelectorAll('form .ng-invalid');
        if (formGroupInvalid && formGroupInvalid.length) {
          return NgxScrollToFirstInvalidDirective.scrollToElement(
            formGroupInvalid[0],
            this.ionContent
          );
        }
      }

      return NgxScrollToFirstInvalidDirective.scrollToElement(
        this.el.nativeElement,
        this.ionContent
      );
    }
  }
}
