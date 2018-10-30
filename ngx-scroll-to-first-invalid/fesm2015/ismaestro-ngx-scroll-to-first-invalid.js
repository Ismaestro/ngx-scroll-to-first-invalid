import { Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';
import '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxScrollToFirstInvalidDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static scrollToElement(element) {
        if (element) {
            const /** @type {?} */ distance = window.pageYOffset - Math.abs(element.getBoundingClientRect().y);
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
    /**
     * @param {?} formGroup
     * @return {?}
     */
    static markFormGroupTouched(formGroup) {
        (/** @type {?} */ (Object)).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                NgxScrollToFirstInvalidDirective.markFormGroupTouched(control);
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSubmit(event) {
        event.preventDefault();
        if (!this.formGroup.valid) {
            NgxScrollToFirstInvalidDirective.markFormGroupTouched(this.formGroup);
            const /** @type {?} */ formControlInvalid = this.el.nativeElement.querySelector('.ng-invalid');
            if (formControlInvalid) {
                return NgxScrollToFirstInvalidDirective.scrollToElement(formControlInvalid);
            }
            else {
                // The first element is the global form and here we are looking for the first nested form
                const /** @type {?} */ formGroupInvalid = this.el.nativeElement.querySelectorAll('form .ng-invalid');
                if (formGroupInvalid && formGroupInvalid.length) {
                    return NgxScrollToFirstInvalidDirective.scrollToElement(formGroupInvalid[0]);
                }
            }
            return NgxScrollToFirstInvalidDirective.scrollToElement(this.el.nativeElement);
        }
    }
}
NgxScrollToFirstInvalidDirective.decorators = [
    { type: Directive, args: [{ selector: '[ngxScrollToFirstInvalid]' },] },
];
/** @nocollapse */
NgxScrollToFirstInvalidDirective.ctorParameters = () => [
    { type: ElementRef, },
];
NgxScrollToFirstInvalidDirective.propDecorators = {
    "formGroup": [{ type: Input },],
    "onSubmit": [{ type: HostListener, args: ['submit', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxScrollToFirstInvalidModule {
}
NgxScrollToFirstInvalidModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [NgxScrollToFirstInvalidDirective],
                exports: [NgxScrollToFirstInvalidDirective]
            },] },
];
/** @nocollapse */
NgxScrollToFirstInvalidModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxScrollToFirstInvalidModule, NgxScrollToFirstInvalidDirective as ɵa };
//# sourceMappingURL=ismaestro-ngx-scroll-to-first-invalid.js.map
