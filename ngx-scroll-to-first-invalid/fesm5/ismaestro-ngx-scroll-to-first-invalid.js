import { Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';
import '@angular/forms';

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
        ((/** @type {?} */ (Object))).values(formGroup.controls).forEach(function (control) {
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
        { type: Directive, args: [{ selector: '[ngxScrollToFirstInvalid]' },] }
    ];
    /** @nocollapse */
    NgxScrollToFirstInvalidDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NgxScrollToFirstInvalidDirective.propDecorators = {
        formGroup: [{ type: Input }],
        onSubmit: [{ type: HostListener, args: ['submit', ['$event'],] }]
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
        { type: NgModule, args: [{
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

export { NgxScrollToFirstInvalidModule, NgxScrollToFirstInvalidDirective as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNtYWVzdHJvLW5neC1zY3JvbGwtdG8tZmlyc3QtaW52YWxpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGlzbWFlc3Ryby9uZ3gtc2Nyb2xsLXRvLWZpcnN0LWludmFsaWQvbmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGlzbWFlc3Ryby9uZ3gtc2Nyb2xsLXRvLWZpcnN0LWludmFsaWQvbmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZF0nfSlcbmV4cG9ydCBjbGFzcyBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogTmdGb3JtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIHN0YXRpYyBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHdpbmRvdy5wYWdlWU9mZnNldCAtIE1hdGguYWJzKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSk7XG5cbiAgICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIDE1MFxuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIGVsZW1lbnQuYmx1cigpOyAvLyBUcmlnZ2VyIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIGRpc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbWFya0Zvcm1Hcm91cFRvdWNoZWQoZm9ybUdyb3VwKSB7XG4gICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICAgIGlmIChjb250cm9sLmNvbnRyb2xzKSB7XG4gICAgICAgIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlLm1hcmtGb3JtR3JvdXBUb3VjaGVkKGNvbnRyb2wpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc3VibWl0JywgWyckZXZlbnQnXSlcbiAgb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgTmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmUubWFya0Zvcm1Hcm91cFRvdWNoZWQodGhpcy5mb3JtR3JvdXApO1xuXG4gICAgICBjb25zdCBmb3JtQ29udHJvbEludmFsaWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5nLWludmFsaWQnKTtcblxuICAgICAgaWYgKGZvcm1Db250cm9sSW52YWxpZCkge1xuICAgICAgICByZXR1cm4gTmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmUuc2Nyb2xsVG9FbGVtZW50KGZvcm1Db250cm9sSW52YWxpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgZ2xvYmFsIGZvcm0gYW5kIGhlcmUgd2UgYXJlIGxvb2tpbmcgZm9yIHRoZSBmaXJzdCBuZXN0ZWQgZm9ybVxuICAgICAgICBjb25zdCBmb3JtR3JvdXBJbnZhbGlkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gLm5nLWludmFsaWQnKTtcbiAgICAgICAgaWYgKGZvcm1Hcm91cEludmFsaWQgJiYgZm9ybUdyb3VwSW52YWxpZC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gTmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmUuc2Nyb2xsVG9FbGVtZW50KGZvcm1Hcm91cEludmFsaWRbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5zY3JvbGxUb0VsZW1lbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtc2Nyb2xsLXRvLWZpcnN0LWludmFsaWQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW05neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZE1vZHVsZSB7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsMENBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQ2pDOzs7OztJQUVNLGdEQUFlOzs7O0lBQXRCLFVBQXVCLE9BQU87UUFDNUIsSUFBSSxPQUFPLEVBQUU7O2dCQUNMLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxH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