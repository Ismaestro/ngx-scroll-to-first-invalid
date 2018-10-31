/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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
export { NgxScrollToFirstInvalidDirective };
if (false) {
    /** @type {?} */
    NgxScrollToFirstInvalidDirective.prototype.formGroup;
    /** @type {?} */
    NgxScrollToFirstInvalidDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpc21hZXN0cm8vbmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLyIsInNvdXJjZXMiOlsibmd4LXNjcm9sbC10by1maXJzdC1pbnZhbGlkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEM7SUFJRSwwQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxnREFBZTs7OztJQUF0QixVQUF1QixPQUFPO1FBQzVCLElBQUksT0FBTyxFQUFFOztnQkFDTCxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqRixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNaLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRzthQUNoRSxDQUFDLENBQUM7WUFFSCxVQUFVLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNoQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7Z0JBQ3pDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7O0lBRU0scURBQW9COzs7O0lBQTNCLFVBQTRCLFNBQVM7UUFDbkMsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN0RCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFeEIsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUNwQixnQ0FBZ0MsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFHRCxtREFBUTs7OztJQURSLFVBQ1MsS0FBSztRQUNaLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDekIsZ0NBQWdDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztnQkFFaEUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUU3RSxJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixPQUFPLGdDQUFnQyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzdFO2lCQUFNOzs7b0JBRUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7Z0JBQ25GLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO29CQUMvQyxPQUFPLGdDQUFnQyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM5RTthQUNGO1lBRUQsT0FBTyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRjtJQUNILENBQUM7O2dCQXhERixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUM7Ozs7Z0JBSC9CLFVBQVU7Ozs0QkFLMUIsS0FBSzsyQkFpQ0wsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFzQnBDLHVDQUFDO0NBQUEsQUF6REQsSUF5REM7U0F4RFksZ0NBQWdDOzs7SUFDM0MscURBQTJCOztJQUVmLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25neFNjcm9sbFRvRmlyc3RJbnZhbGlkXSd9KVxuZXhwb3J0IGNsYXNzIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBOZ0Zvcm07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgc3RhdGljIHNjcm9sbFRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gTWF0aC5hYnMoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KTtcblxuICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZIC0gMTUwXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgZWxlbWVudC5ibHVyKCk7IC8vIFRyaWdnZXIgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgZGlzdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBtYXJrRm9ybUdyb3VwVG91Y2hlZChmb3JtR3JvdXApIHtcbiAgICAoPGFueT5PYmplY3QpLnZhbHVlcyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcbiAgICAgICAgTmd4U2Nyb2xsVG9GaXJzdEludmFsaWREaXJlY3RpdmUubWFya0Zvcm1Hcm91cFRvdWNoZWQoY29udHJvbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdzdWJtaXQnLCBbJyRldmVudCddKVxuICBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm1Hcm91cCk7XG5cbiAgICAgIGNvbnN0IGZvcm1Db250cm9sSW52YWxpZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmctaW52YWxpZCcpO1xuXG4gICAgICBpZiAoZm9ybUNvbnRyb2xJbnZhbGlkKSB7XG4gICAgICAgIHJldHVybiBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5zY3JvbGxUb0VsZW1lbnQoZm9ybUNvbnRyb2xJbnZhbGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBnbG9iYWwgZm9ybSBhbmQgaGVyZSB3ZSBhcmUgbG9va2luZyBmb3IgdGhlIGZpcnN0IG5lc3RlZCBmb3JtXG4gICAgICAgIGNvbnN0IGZvcm1Hcm91cEludmFsaWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSAubmctaW52YWxpZCcpO1xuICAgICAgICBpZiAoZm9ybUdyb3VwSW52YWxpZCAmJiBmb3JtR3JvdXBJbnZhbGlkLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBOZ3hTY3JvbGxUb0ZpcnN0SW52YWxpZERpcmVjdGl2ZS5zY3JvbGxUb0VsZW1lbnQoZm9ybUdyb3VwSW52YWxpZFswXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5neFNjcm9sbFRvRmlyc3RJbnZhbGlkRGlyZWN0aXZlLnNjcm9sbFRvRWxlbWVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIl19