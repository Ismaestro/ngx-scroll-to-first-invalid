(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ismaestro/ngx-scroll-to-first-invalid', ['exports', '@angular/core'], factory) :
    (factory((global.ismaestro = global.ismaestro || {}, global.ismaestro['ngx-scroll-to-first-invalid'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NgxScrollToFirstInvalidDirective = /** @class */ (function () {
        function NgxScrollToFirstInvalidDirective(el) {
            this.el = el;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        NgxScrollToFirstInvalidDirective.scrollToElement = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                if (element) {
                    /** @type {?} */
                    var distance = window.pageYOffset - Math.abs(element.getBoundingClientRect().y);
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
        NgxScrollToFirstInvalidDirective.markFormGroupTouched = /**
         * @param {?} formGroup
         * @return {?}
         */
            function (formGroup) {
                (( /** @type {?} */(Object))).values(formGroup.controls).forEach(function (control) {
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
        NgxScrollToFirstInvalidDirective.prototype.onSubmit = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                if (!this.formGroup.valid) {
                    NgxScrollToFirstInvalidDirective.markFormGroupTouched(this.formGroup);
                    /** @type {?} */
                    var formControlInvalid = this.el.nativeElement.querySelector('.ng-invalid');
                    if (formControlInvalid) {
                        return NgxScrollToFirstInvalidDirective.scrollToElement(formControlInvalid);
                    }
                    else {
                        // The first element is the global form and here we are looking for the first nested form
                        /** @type {?} */
                        var formGroupInvalid = this.el.nativeElement.querySelectorAll('form .ng-invalid');
                        if (formGroupInvalid && formGroupInvalid.length) {
                            return NgxScrollToFirstInvalidDirective.scrollToElement(formGroupInvalid[0]);
                        }
                    }
                    return NgxScrollToFirstInvalidDirective.scrollToElement(this.el.nativeElement);
                }
            };
        NgxScrollToFirstInvalidDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[ngxScrollToFirstInvalid]' },] }
        ];
        /** @nocollapse */
        NgxScrollToFirstInvalidDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        NgxScrollToFirstInvalidDirective.propDecorators = {
            formGroup: [{ type: core.Input }],
            onSubmit: [{ type: core.HostListener, args: ['submit', ['$event'],] }]
        };
        return NgxScrollToFirstInvalidDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NgxScrollToFirstInvalidModule = /** @class */ (function () {
        function NgxScrollToFirstInvalidModule() {
        }
        NgxScrollToFirstInvalidModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [NgxScrollToFirstInvalidDirective],
                        exports: [NgxScrollToFirstInvalidDirective]
                    },] }
        ];
        return NgxScrollToFirstInvalidModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.NgxScrollToFirstInvalidModule = NgxScrollToFirstInvalidModule;
    exports.ɵa = NgxScrollToFirstInvalidDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNtYWVzdHJvLW5neC1zY3JvbGwtdG8tZmlyc3QtaW52YWxpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bpc21hZXN0cm8vbmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkL25neC1zY3JvbGwtdG8tZmlyc3QtaW52YWxpZC5kaXJlY3RpdmUudHMiLCJuZzovL0Bpc21hZXN0cm8vbmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkL25neC1zY3JvbGwtdG8tZmlyc3QtaW52YWxpZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbmd4U2Nyb2xsVG9GaXJzdEludmFsaWRdJ30pXG5leHBvcnQgY2xhc3MgTmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmUge1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IE5nRm9ybTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBzdGF0aWMgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSB3aW5kb3cucGFnZVlPZmZzZXQgLSBNYXRoLmFicyhlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpO1xuXG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkgLSAxNTBcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICBlbGVtZW50LmJsdXIoKTsgLy8gVHJpZ2dlciBlcnJvciBtZXNzYWdlc1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9LCBkaXN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cCkge1xuICAgICg8YW55Pk9iamVjdCkudmFsdWVzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChjb250cm9sID0+IHtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuXG4gICAgICBpZiAoY29udHJvbC5jb250cm9scykge1xuICAgICAgICBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5tYXJrRm9ybUdyb3VwVG91Y2hlZChjb250cm9sKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3N1Ym1pdCcsIFsnJGV2ZW50J10pXG4gIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcbiAgICAgIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlLm1hcmtGb3JtR3JvdXBUb3VjaGVkKHRoaXMuZm9ybUdyb3VwKTtcblxuICAgICAgY29uc3QgZm9ybUNvbnRyb2xJbnZhbGlkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZy1pbnZhbGlkJyk7XG5cbiAgICAgIGlmIChmb3JtQ29udHJvbEludmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlLnNjcm9sbFRvRWxlbWVudChmb3JtQ29udHJvbEludmFsaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIGdsb2JhbCBmb3JtIGFuZCBoZXJlIHdlIGFyZSBsb29raW5nIGZvciB0aGUgZmlyc3QgbmVzdGVkIGZvcm1cbiAgICAgICAgY29uc3QgZm9ybUdyb3VwSW52YWxpZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIC5uZy1pbnZhbGlkJyk7XG4gICAgICAgIGlmIChmb3JtR3JvdXBJbnZhbGlkICYmIGZvcm1Hcm91cEludmFsaWQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlLnNjcm9sbFRvRWxlbWVudChmb3JtR3JvdXBJbnZhbGlkWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gTmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmUuc2Nyb2xsVG9FbGVtZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmV9IGZyb20gJy4vbmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U2Nyb2xsVG9GaXJzdEludmFsaWRNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRSwwQ0FBb0IsRUFBYztZQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7U0FDakM7Ozs7O1FBRU0sZ0RBQWU7Ozs7WUFBdEIs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