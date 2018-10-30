(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ismaestro/ngx-scroll-to-first-invalid', ['exports', '@angular/core'], factory) :
    (factory((global.ismaestro = global.ismaestro || {}, global.ismaestro['ngx-scroll-to-first-invalid'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxScrollToFirstInvalidDirective = (function () {
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
        { type: core.Directive, args: [{ selector: '[ngxScrollToFirstInvalid]' },] },
    ];
    /** @nocollapse */
    NgxScrollToFirstInvalidDirective.ctorParameters = function () {
        return [
            { type: core.ElementRef, },
        ];
    };
    NgxScrollToFirstInvalidDirective.propDecorators = {
        "formGroup": [{ type: core.Input },],
        "onSubmit": [{ type: core.HostListener, args: ['submit', ['$event'],] },],
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxScrollToFirstInvalidModule = (function () {
        function NgxScrollToFirstInvalidModule() {
        }
        return NgxScrollToFirstInvalidModule;
    }());
    NgxScrollToFirstInvalidModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [],
                    declarations: [NgxScrollToFirstInvalidDirective],
                    exports: [NgxScrollToFirstInvalidDirective]
                },] },
    ];
    /** @nocollapse */
    NgxScrollToFirstInvalidModule.ctorParameters = function () { return []; };

    exports.NgxScrollToFirstInvalidModule = NgxScrollToFirstInvalidModule;
    exports.ɵa = NgxScrollToFirstInvalidDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ismaestro-ngx-scroll-to-first-invalid.umd.js.map
