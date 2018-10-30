import { Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxScrollToFirstInvalidDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function NgxScrollToFirstInvalidDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    NgxScrollToFirstInvalidDirective.scrollToElement = function (element) {
        if (element) {
            var /** @type {?} */ distance = window.pageYOffset - Math.abs(element.getBoundingClientRect().y);
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.getBoundingClientRect().top + window.scrollY - 150
            });
            setTimeout(function () {
                element.focus();
                element.blur(); // Trigger error messages
                element.focus();
            }, distance);
        }
    };
    /**
     * @param {?} formGroup
     * @return {?}
     */
    NgxScrollToFirstInvalidDirective.markFormGroupTouched = function (formGroup) {
        ((Object)).values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                NgxScrollToFirstInvalidDirective.markFormGroupTouched(control);
            }
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxScrollToFirstInvalidDirective.prototype.onSubmit = function (event) {
        event.preventDefault();
        if (!this.formGroup.valid) {
            NgxScrollToFirstInvalidDirective.markFormGroupTouched(this.formGroup);
            var /** @type {?} */ formControlInvalid = this.el.nativeElement.querySelector('.ng-invalid');
            if (formControlInvalid) {
                return NgxScrollToFirstInvalidDirective.scrollToElement(formControlInvalid);
            }
            else {
                // The first element is the global form and here we are looking for the first nested form
                var /** @type {?} */ formGroupInvalid = this.el.nativeElement.querySelectorAll('form .ng-invalid');
                if (formGroupInvalid && formGroupInvalid.length) {
                    return NgxScrollToFirstInvalidDirective.scrollToElement(formGroupInvalid[0]);
                }
            }
            return NgxScrollToFirstInvalidDirective.scrollToElement(this.el.nativeElement);
        }
    };
    return NgxScrollToFirstInvalidDirective;
}());
NgxScrollToFirstInvalidDirective.decorators = [
    { type: Directive, args: [{ selector: '[ngxScrollToFirstInvalid]' },] },
];
/** @nocollapse */
NgxScrollToFirstInvalidDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
NgxScrollToFirstInvalidDirective.propDecorators = {
    "formGroup": [{ type: Input },],
    "onSubmit": [{ type: HostListener, args: ['submit', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxScrollToFirstInvalidModule = /** @class */ (function () {
    function NgxScrollToFirstInvalidModule() {
    }
    return NgxScrollToFirstInvalidModule;
}());
NgxScrollToFirstInvalidModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [NgxScrollToFirstInvalidDirective],
                exports: [NgxScrollToFirstInvalidDirective]
            },] },
];
/** @nocollapse */
NgxScrollToFirstInvalidModule.ctorParameters = function () { return []; };

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
