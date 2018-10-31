/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
export class NgxScrollToFirstInvalidDirective {
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
            /** @type {?} */
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
    /**
     * @param {?} formGroup
     * @return {?}
     */
    static markFormGroupTouched(formGroup) {
        ((/** @type {?} */ (Object))).values(formGroup.controls).forEach(control => {
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
            /** @type {?} */
            const formControlInvalid = this.el.nativeElement.querySelector('.ng-invalid');
            if (formControlInvalid) {
                return NgxScrollToFirstInvalidDirective.scrollToElement(formControlInvalid);
            }
            else {
                // The first element is the global form and here we are looking for the first nested form
                /** @type {?} */
                const formGroupInvalid = this.el.nativeElement.querySelectorAll('form .ng-invalid');
                if (formGroupInvalid && formGroupInvalid.length) {
                    return NgxScrollToFirstInvalidDirective.scrollToElement(formGroupInvalid[0]);
                }
            }
            return NgxScrollToFirstInvalidDirective.scrollToElement(this.el.nativeElement);
        }
    }
}
NgxScrollToFirstInvalidDirective.decorators = [
    { type: Directive, args: [{ selector: '[ngxScrollToFirstInvalid]' },] }
];
/** @nocollapse */
NgxScrollToFirstInvalidDirective.ctorParameters = () => [
    { type: ElementRef }
];
NgxScrollToFirstInvalidDirective.propDecorators = {
    formGroup: [{ type: Input }],
    onSubmit: [{ type: HostListener, args: ['submit', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NgxScrollToFirstInvalidDirective.prototype.formGroup;
    /** @type {?} */
    NgxScrollToFirstInvalidDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpc21hZXN0cm8vbmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLyIsInNvdXJjZXMiOlsibmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEMsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUczQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNsQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTztRQUM1QixJQUFJLE9BQU8sRUFBRTs7a0JBQ0wsUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFakYsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDWixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUc7YUFDaEUsQ0FBQyxDQUFDO1lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QjtnQkFDekMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBUztRQUNuQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXhCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDcEIsZ0NBQWdDLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQUs7UUFDWixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3pCLGdDQUFnQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7a0JBRWhFLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFFN0UsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsT0FBTyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUM3RTtpQkFBTTs7O3NCQUVDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO2dCQUNuRixJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtvQkFDL0MsT0FBTyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUU7YUFDRjtZQUVELE9BQU8sZ0NBQWdDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7WUF4REYsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFDOzs7O1lBSC9CLFVBQVU7Ozt3QkFLMUIsS0FBSzt1QkFpQ0wsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWpDbEMscURBQTJCOztJQUVmLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25neFNjcm9sbFRvRmlyc3RJbnZhbGlkXSd9KVxuZXhwb3J0IGNsYXNzIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBOZ0Zvcm07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgc3RhdGljIHNjcm9sbFRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gTWF0aC5hYnMoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KTtcblxuICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZIC0gMTUwXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgZWxlbWVudC5ibHVyKCk7IC8vIFRyaWdnZXIgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgZGlzdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtYXJrRm9ybUdyb3VwVG91Y2hlZChmb3JtR3JvdXApIHtcbiAgICAoPGFueT5PYmplY3QpLnZhbHVlcyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcbiAgICAgICAgTmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmUubWFya0Zvcm1Hcm91cFRvdWNoZWQoY29udHJvbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdzdWJtaXQnLCBbJyRldmVudCddKVxuICBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm1Hcm91cCk7XG5cbiAgICAgIGNvbnN0IGZvcm1Db250cm9sSW52YWxpZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmctaW52YWxpZCcpO1xuXG4gICAgICBpZiAoZm9ybUNvbnRyb2xJbnZhbGlkKSB7XG4gICAgICAgIHJldHVybiBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5zY3JvbGxUb0VsZW1lbnQoZm9ybUNvbnRyb2xJbnZhbGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBnbG9iYWwgZm9ybSBhbmQgaGVyZSB3ZSBhcmUgbG9va2luZyBmb3IgdGhlIGZpcnN0IG5lc3RlZCBmb3JtXG4gICAgICAgIGNvbnN0IGZvcm1Hcm91cEludmFsaWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSAubmctaW52YWxpZCcpO1xuICAgICAgICBpZiAoZm9ybUdyb3VwSW52YWxpZCAmJiBmb3JtR3JvdXBJbnZhbGlkLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5zY3JvbGxUb0VsZW1lbnQoZm9ybUdyb3VwSW52YWxpZFswXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlLnNjcm9sbFRvRWxlbWVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIl19